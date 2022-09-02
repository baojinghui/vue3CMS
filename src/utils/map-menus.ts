import { RouteRecordRaw } from 'vue-router'
import { MyBreadcrumbs } from '@/basee-ui/breadcrumb'
//获取菜单中第一项
let firstMenu: any = null

//根据服务器返回的用户菜单中的url匹配项目中所有的routes，匹配到的就是用户所拥有的权限
export const mapMenusToRoutes = (menus: any[]): RouteRecordRaw[] => {
  //需要推入到main的children的routes
  const routes: RouteRecordRaw[] = []

  //获取是所有的项目中routes
  const allRoutes: RouteRecordRaw[] = []
  // require为webpack的工具,作用为找到要加载那个文件的名字(main下所有的文件都是菜单的路由组件)
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    //require()传入路径可以获取模块的内容
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  //找到所有的routes中的path与menus的url所匹配的，就是用户所能拥有的权限
  //menus中如果 type==1,递归 ->childrem ->type==1 如果type==2 -> url ->route
  const _recureseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recureseGetRoute(menu.children)
      }
    }
  }
  _recureseGetRoute(menus)

  //返回菜单所能跳转的路由
  return routes
}

//根据当前的路径,从匹配出对应菜单中的url,找到当前所处菜单的id,下次刷新页面菜单会动态绑定到刷新前的菜单项目
export const mapMenusPath = (
  menus: any,
  path: string,
  breadcrumb?: MyBreadcrumbs[]
): any => {
  for (const menu of menus) {
    if (menu.type === 1) {
      const findMenu = mapMenusPath(menu.children ?? [], path)
      if (findMenu) {
        //判断是否携带breadcrumb，带的话就是为了得到菜单的名字映射面包屑
        if (breadcrumb) {
          breadcrumb.push({ name: menu.name })
          breadcrumb.push({
            //二级标题的名字，因为菜单中没路径，就不配置
            name: findMenu.name,
            //二级标题的可选项
            path: findMenu.url
          })
        }
        return findMenu
      }
    } else if (menu.type === 2 && menu.url == path) {
      return menu
    }
  }
}
//导出菜单的第一个item，用于进入页面的初始化
export { firstMenu }

//根据routes路径匹配当前的菜单，获取当前菜单信息，映射到面包屑
export const pathMapBreadcrumb = (menus: any, path: string) => {
  const breadcrumb: MyBreadcrumbs[] = []
  mapMenusPath(menus, path, breadcrumb)
  return breadcrumb
}

import { useStore } from '@/store'

//传入当前页面名和要查询权限的名字
export const usePermission = (pageName: string, handleName: string) => {
  const store = useStore()
  //从仓库拿到当前用户所拥有的权限
  const permissions = store.state.login.permissions
  //拼接出要验证的权限名
  const verifyPermission = `system:${pageName}:${handleName}`
  //查看用户是或否有此权限，有的话返回权限名，没有返回undefined
  const res = permissions.find((item) => {
    return item === verifyPermission
  })
  //返回真或假
  return !!res
}

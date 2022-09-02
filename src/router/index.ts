import { createRouter, createWebHashHistory } from 'vue-router'
import cache from '@/utils/cache'
import type { RouteRecordRaw } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'
//配置路由信息
const routes: RouteRecordRaw[] = [
  //路由充重定向
  {
    path: '/',
    redirect: '/login' //把首页重定向为/login
  },
  //配置路由
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue')
    //children:[]->·根据userMenus.来决定->~children
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-fond',
    component: () => import('@/views/not-fond/404.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  //如过用户未登录进行跳转时返回登录页
  if (to.path !== '/login') {
    const token = cache.getStrCache('token')
    if (!token) {
      return '/login'
    }
  }

  //如果用户首次来到首页重定向到菜单的第一项
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router

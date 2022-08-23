//引入routes的类型声明
import type { RouteRecordRaw } from 'vue-router'
//配置路由信息
const routes: RouteRecordRaw[] = [
  //路由充重定向
  {
    path: '/',
    redirect: '/user', //把首页重定向为/login
  },
  //配置路由
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/user',
    component: () => import('@/pages/user/index.vue'),
  },
]

export default routes

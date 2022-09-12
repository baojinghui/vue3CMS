//Module<S, R>需要传入两个类型，第一个是state的类型
import { Module } from 'vuex'
//导入当前模块state的类型
import { LoginStateType } from './types'
// 导入根仓库state的类型
import { RootStatetype } from '@/store/types'
//导入请求及请求参数对应的类型
import {
  accountLoginRequest,
  requestUserById,
  requestUserMenusByRoleId
} from '@/service/login/login'

import { AccountInfo } from '@/service/login/type'
//导入本地存储
import cache from '@/utils/cache'
//导入仓库
import router from '@/router'
//导入方法将服务器返回的菜单meuns->rouens
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
const loginModule: Module<LoginStateType, RootStatetype> = {
  //开启命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: [] //登陆者用户可以拿到的所有权限
    }
  },
  actions: {
    //用户登录
    async accountLoginAction({ commit }, payload: AccountInfo) {
      //实现登录逻辑(获取token和id)
      const accountLoginResult = await accountLoginRequest(payload)
      const { id, token } = accountLoginResult.data
      //把token保存到仓库，并本地存储
      commit('ChangeToken', token)
      cache.setStrCache('token', token)

      //拿到根仓库中action的方法，获取全部的角色和部门数据
      // dispatch('gitInitialDataAction', null, { root: true })

      //获取用户信息并保存(根据id和token)
      const userInfoResult = await requestUserById(id)
      const userInfo = userInfoResult.data
      //把用户信息保存到仓库并本地缓存
      commit('ChangeUserInfo', userInfo)
      cache.setCache('userInfo', userInfo)

      //根据用户信息的roleId获取用户的菜单并保存
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      commit('ChangeUserMenus', userMenusResult.data)
      cache.setCache('userMenus', userMenusResult.data)

      //跳转到首页
      router.push('/main')
    },

    //页面刷新后根据本地缓存进行页面初始化
    loadLocalLogin({ commit }) {
      const token = cache.getStrCache('token')
      if (token) {
        commit('ChangeToken', token)
      }
      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('ChangeUserInfo', userInfo)
      }
      const userMenus = cache.getCache('userMenus')
      if (userMenus) {
        commit('ChangeUserMenus', userMenus)
      }
    }
  },
  mutations: {
    //保存和修改登陆后的token
    ChangeToken(state, token) {
      state.token = token
    },

    //保存根据用token和id获取的用户信息
    ChangeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },

    //修改用户菜单
    ChangeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //将Menus中的url映射为routes
      const routes = mapMenusToRoutes(userMenus)

      //将routes添加到router.main.children,两种添加方式
      //router.addRoute({ name: 'admin', path: '/admin', component: Admin })
      // router.addRoute('admin', { path: 'settings', component: AdminSettings })
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  getters: {}
}
export default loginModule

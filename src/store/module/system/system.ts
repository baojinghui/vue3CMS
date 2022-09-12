import { Module } from 'vuex'
import { SystemStateType } from './types'
import { RootStatetype } from '@/store/types'
//删除用户,获取列表,创建列表,编辑列表的方法
import {
  deleteListById,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/system/system'
//首字母大写
import firstUpCase from '@/utils/firstUpCase'
const systemModule: Module<SystemStateType, RootStatetype> = {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  }),
  actions: {
    //获取列表
    async getPageListAction({ commit }, payload: any) {
      //获取url
      const pageName = payload.pageName // users / role
      const pageUrl = `/${pageName}/list`

      //根据pageUrl向对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      commit(`change${firstUpCase(pageName)}List`, list)
      commit(`change${firstUpCase(pageName)}Count`, totalCount)
    },

    //删除列表的某一项
    async deleteList({ dispatch }, payload: any) {
      //获取url
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`

      //发送删除的请求
      await deleteListById(url)

      //重新刷新页面
      const queryInfo = { size: 10, offset: 0 }
      dispatch('getPageListAction', { pageName, queryInfo })
    },

    //新建列表
    async createPageDataAction({ dispatch }, paylod) {
      const { pageName, newData } = paylod
      const url = `/${pageName}`
      await createPageData(url, newData)

      //重新刷新页面
      const queryInfo = { size: 10, offset: 0 }
      dispatch('getPageListAction', { pageName, queryInfo })
    },
    //编辑列表
    async editPageDataAction({ dispatch }, paylod) {
      //编辑数据
      const { pageName, editData, id } = paylod
      const url = `/${pageName}/${id}`
      await editPageData(url, editData)

      //重新刷新页面
      const queryInfo = { size: 10, offset: 0 }
      dispatch('getPageListAction', { pageName, queryInfo })
    }
  },
  mutations: {
    changeUsersList(state, list) {
      state.usersList = list
    },
    changeUsersCount(state, totalCount) {
      state.usersCount = totalCount
    },
    changeRoleList(state, list) {
      state.roleList = list
    },
    changeRoleCount(state, totalCount) {
      state.roleCount = totalCount
    },
    changeGoodsList(state, list) {
      state.goodsList = list
    },
    changeGoodsCount(state, totalCount) {
      state.goodsCount = totalCount
    },
    changeMenuList(state, list) {
      state.menuList = list
    },
    changeMenuCount(state, totalCount) {
      state.menuCount = totalCount
    }
  },
  getters: {
    //返回table中要展示的数据
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    //返回总共的数据条数
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}

export default systemModule

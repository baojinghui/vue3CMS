//model模型 modal模态 module模块
// dashboard指示板组件的仓库
import { Module } from 'vuex'
import { IDashboardState } from './types'
import { RootStatetype } from '../../types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/dashboard/dashboard'

const dashboardModule: Module<IDashboardState, RootStatetype> = {
  namespaced: true,
  state: () => ({
    //商品个数
    categoryGoodsCount: [],
    //每种商品的分类
    categoryGoodsSale: [],
    //每种商品的收藏个数
    categoryGoodsFavor: [],
    //不同城市的销量
    addressGoodsSale: []
  }),
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCount = await getCategoryGoodsCount()
      const categoryGoodsSale = await getCategoryGoodsSale()
      const categoryGoodsFavor = await getCategoryGoodsFavor()
      const addressGoodsSale = await getAddressGoodsSale()
      commit('changeCategoryGoodsCount', categoryGoodsCount.data)
      commit('changeCategoryGoodsSale', categoryGoodsSale.data)
      commit('changeCategoryGoodsFavor', categoryGoodsFavor.data)
      commit('changeAddressGoodsSale', addressGoodsSale.data)
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  getters: {}
}

export default dashboardModule

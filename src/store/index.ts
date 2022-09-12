import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './module/login/login'
import system from './module/system/system'
import dashboard from './module/dashboard/dashboard'
//导入index的state的类型
import { RootStatetype, RootWitchModel } from './types'
import { getPageListData } from '@/service/system/system'
const store = createStore<RootStatetype>({
  state() {
    return {
      //全部部门
      entireDepartment: [],
      //全部角色
      entireRole: [],
      //全部的菜单列表
      entireMenu: []
    }
  },
  actions: {
    //拿到初始化数据并保存
    async gitInitialDataAction({ commit }) {
      //请求部门和角色数据
      const epartmentListRes = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: epartmentList } = epartmentListRes.data

      //请求角色的数据
      const roleListRes = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const { list: roleList } = roleListRes.data

      //请求menu的数据
      const menuListRes = await getPageListData('/menu/list', {})
      const { list: menuList } = menuListRes.data
      commit('changeEntireDepartment', epartmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  mutations: {
    //保存部门数据
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    //保存部门数据
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

//每次刷新丢失store中数据，每次刷新时进行初识化,从本地读取
export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('gitInitialDataAction')
}

//因为无法再组件中拿到store子模块类型，重写useStore
//在内部调用vuex上的原来的useStore但是在引入时别名了
export const useStore = (): Store<RootWitchModel> => {
  return useVuexStore()
}

export default store

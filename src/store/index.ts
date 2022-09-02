import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './module/login/login'
//导入index的state的类型
import { RootState, RootWitchModel } from './types'
const store = createStore<RootState>({
  state() {
    return {
      name: '张三'
    }
  },
  actions: {},
  mutations: {},
  modules: {
    login //导入login仓库
  }
})

//每次刷新会丢失store中的数据，定义一个函数，每次刷新时进行初识化
export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}
//因为无法再组件中拿到store子模块类型，重写useStore
//在内部调用vuex上的原来的useStore但是在引入时别名了
export const useStore = (): Store<RootWitchModel> => {
  return useVuexStore()
}

export default store

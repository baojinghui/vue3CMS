import { createStore } from 'vuex'
const store = createStore({
  state: () => {
    return {
      name: '张三',
    }
  },
})

export default store

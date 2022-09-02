import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { setupStore } from '@/store'
//导入全局注册的插件
import registerApp from './global/index'
//导入初始化样式的包
import 'normalize.css'
//导入自定义的初始化样式
import './assets/css/index.less'
import cache from './utils/cache'
const app = createApp(App)
app.use(store)
//每次刷新时查看有无token初始化仓库，根据本地存储的用户信息加载路由映射
if (cache.getStrCache('token')) {
  setupStore()
}
app.use(router)

//全局注册的插件
app.use(registerApp)
app.mount('#app')

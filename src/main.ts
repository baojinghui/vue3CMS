import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'
import registerApp from './global/index' //导入全局注册的插件
import './service/baseAxios'
const app = createApp(App) //创建实例
app.use(router) //挂载路由
app.use(store) //挂载仓库
app.use(registerApp) //全局注册的插件
app.mount('#app') //挂载到dom上

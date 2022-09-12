import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //全局引入el-icon
//把icon注册为全局的icon
export default (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

import type { App } from 'vue'
import { registerIcon } from './register-element'
export default (app: App) => {
  registerIcon(app) //icon图标注册为全局可用
}

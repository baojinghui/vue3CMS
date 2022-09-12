import type { App } from 'vue'
import 'element-plus/theme-chalk/el-loading.css'
import registerIcon from './register-element'
import dateFormat from './register-dateFormat'
export default (app: App) => {
  //icon图标注册为全局可用
  registerIcon(app)
  //$dateFormat格式化日期全局可用
  dateFormat(app)
}

import type { App } from 'vue'
import { dateFormat } from '@/utils/dateFormat'
export default (app: App) => {
  app.config.globalProperties.$dateFormat = (
    str: string,
    b = 'YYYY-MM-DD HH:mm:ss'
  ) => {
    return dateFormat(str, b)
  }
}

//导入封装的axios,配置MyAxios的实例并导出
import MyAxios from './request/index'
//导入环境变量
import { BASE_URL, TIME_OUT } from '@/service/request/config'
//导入封装的本地缓存方法
import cache from '@/utils/cache'
const myAxios = new MyAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //可选
  interceptors: {
    resquestInterceptors(config) {
      const token = cache.getStrCache('token')
      if (token && config && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})
//导出封装的axios
export default myAxios

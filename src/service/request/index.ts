//封装一个axios的类,每次使用时生成一个新的实例，这样配置多种不同服务器请求的接口
import axios from 'axios'
//导入axios的  实例的类型
import type { AxiosInstance } from 'axios'
//导入扩展后的接口类型 和扩展后的请求参数类型
import type { MyInterceptors, MyRequestConfig } from './types'
//导入请求动画组件
import { ElLoading } from 'element-plus'
// 导入请求动画实例的类型，用于取消动画
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
//封装axios
class MyAxios {
  instance: AxiosInstance //实例
  interceptors?: MyInterceptors //拦截器
  loading?: LoadingInstance //加载动画
  showLoading?: boolean //是否显示请求的动画
  //config的类型改为加了自己扩展后的类型：AxiosRequestConfig--->MyRequestConfig，
  //上面会增加interceptors接口，支持同时传入多个拦截器，和接受是否显示动画的配置
  constructor(config: MyRequestConfig) {
    //每次调用instance都会产生一个新的实例，在新的实例上面配置新的baseurl等配置
    this.instance = axios.create(config)
    //保存一份传入的所有拦截器
    this.interceptors = config.interceptors
    //默认显示请求动画:showLoading默认为true
    this.showLoading = config.showLoading ?? true
    //使用实例身上的请求拦截器和响应拦截器的方法，把传入拦截器对象中的方法依次传入
    this.instance.interceptors.request.use(
      this.interceptors?.resquestInterceptors,
      this.interceptors?.resquestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    //但是有些拦截器配置每个实例都会需要,
    //如请求时的动画，需要全局配置，让每个实例中都存在,就直接使用axios上面的拦截器进行封装
    this.instance.interceptors.request.use(
      (config) => {
        //全局配置loading动画,拿下loading
        if (this.showLoading)
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载...',
            background: 'rgba(0,0,0,0.5)'
          })
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 200)
        const data = res.data
        if (data.returnCode == '-1001') {
          console.log('响应失败')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close() //移除加载动画
        return err
      }
    )
  }

  //封装request请求
  //请求参数config要用自己扩展后的接口(MyRequestConfig)，才支持传入对象形式的拦截器
  request<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, resject) => {
      //还可以给单个请求配置拦截器
      if (config.interceptors?.resquestInterceptors) {
        //如果存在说明配置了单个请求的拦截器,就把转换后的config返回给config继续处理
        //config.interceptors.resquestInterceptors(config)返回的是一个处理过后的config
        config = config.interceptors.resquestInterceptors(config)
      }
      //请求动画默认false,如果showloading为false,就是关闭请求动画
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      //使用axios自身的request发请求
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //如果为真说明配置了单个请求的响应拦截器,就把转换后的res返回给res继续处理
          //config.interceptors.resquestInterceptors(res)返回的是一个处理过后的res
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          //让动画显示，即使上面不显示动画的请求完也设置，这样不影响后面的动画显示
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          resject(err)
        })
    })
  }
  //封装get请求,就是再get内部调request
  get<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  //封装post请求,就是再post内部调request
  post<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  //封装delete请求,就是再delete内部调request
  delete<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  //封装patch请求,就是再patch内部调request
  patch<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default MyAxios

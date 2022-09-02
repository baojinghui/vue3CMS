/*-------------------------  TS封装拦截器的接口  -------------------------------------*/

//导入axios的  实例的类型      请求参数的类型      响应数据的类型
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

//扩展拦截器的类型,支持传入一个对象,对象中可同时传入多个回调,可以同时包含响应器和拦截器的配置
//T可以接受请求者传入的响应数据的类型
export interface MyInterceptors<T = AxiosResponse> {
  //请求拦截器和请求拦截器捕获错误的类型
  resquestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  resquestInterceptorsCatch?: (err: any) => any
  //响应拦截器和响应拦截器捕获错误的类型
  responseInterceptors?: (config: T) => T //AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}
//类型扩展,把axios上的类型,扩展到自己定义的接口上,使请求参数支持传入一个对象
export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyInterceptors<T> //扩展后的拦截器
  showLoading?: boolean //是否显示加载动画
}

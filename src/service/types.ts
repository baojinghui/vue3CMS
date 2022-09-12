//发送请求后返回数据类型的接口
export interface ResultBackType<T = any> {
  code: number
  data: T
}

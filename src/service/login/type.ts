//用户登录时携带个人信息的接口
export interface AccountInfo {
  name: string
  password: string
}

//用户登录后接口返回数据中data的类型
export interface AccountLoginDataType {
  id: number
  name: string
  token: string
}

//导入子模快的类型
import { LoginState } from './module/login/types'

//index仓库中state的类型
export interface RootState {
  name: string
}

//所有子模块中state的类型
export interface AllModelType {
  login: LoginState
}

//暴漏一个交叉类型，包括所有仓库的state的类型
export type RootWitchModel = RootState & AllModelType

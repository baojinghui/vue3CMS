//导入子模快的类型
import { LoginStateType } from './module/login/types'
import { SystemStateType } from './module/system/types'
import { IDashboardState } from './module/dashboard/types'

//index仓库中state的类型
export interface RootStatetype {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

//所有子模块中state的类型
export interface AllModelType {
  login: LoginStateType
  system: SystemStateType
  dashboard: IDashboardState
}

//暴漏一个交叉类型，包括所有仓库的state的类型
export type RootWitchModel = RootStatetype & AllModelType

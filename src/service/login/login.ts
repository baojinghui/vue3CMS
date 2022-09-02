import myAxios from '@/service'
import { AccountInfo, ResultBackType, AccountLoginDataType } from './type'
//枚举登录页所有的接口
enum LoginAPI {
  //实现登录获取id和token
  AccountLogin = '/login',
  //根据id和token获取用户详细信息
  LoginUserInfo = '/users/',
  //根据用户信息获取用户职位
  UserMenus = '/role/'
}

//用户登录接口
export const accountLoginRequest = (accountUserInfo: AccountInfo) =>
  //传入一个返回值的类型AccountLoginBackType并且限制返回值中data的类型
  myAxios.request<ResultBackType<AccountLoginDataType>>({
    url: LoginAPI.AccountLogin,
    method: 'post',
    data: accountUserInfo
  })

//根据登陆后返回的token,和id再次请求获取用户信息
export const requestUserById = (id: number) =>
  myAxios.request<ResultBackType>({
    method: 'get',
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })

//根据用户信息的roleId获取用户的菜单
export const requestUserMenusByRoleId = (id: number) =>
  myAxios.request<ResultBackType>({
    method: 'get',
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })

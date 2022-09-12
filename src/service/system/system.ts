import myAxios from '..'
import { PageListData } from './types'
import { ResultBackType } from '../types'

//请求要展示列表的信息
export const getPageListData = (url: string, queryInfo: any) =>
  myAxios.request<ResultBackType<PageListData>>({
    method: 'POST',
    url: url,
    data: queryInfo
  })

//删除用户
export const deleteListById = (url: string) => {
  myAxios.request({
    method: 'DELETE',
    url: url
  })
}

//新建用户
export const createPageData = (url: string, queryInfo: any) => {
  return myAxios.request({
    method: 'POST',
    url: url,
    data: queryInfo
  })
}

//编辑用户
export const editPageData = (url: string, queryInfo: any) => {
  return myAxios.patch({
    method: 'PATCH',
    url: url,
    data: queryInfo
  })
}

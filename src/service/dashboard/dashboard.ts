import myAxios from '../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  //每种商品的分类
  categoryGoodsSale = '/goods/category/sale',
  //每种商品的收藏个数
  categoryGoodsFavor = '/goods/category/favor',
  //不同城市的销量
  addressGoodsSale = '/goods/address/sale'
}
//
export const getCategoryGoodsCount = () => {
  return myAxios.request({
    url: DashboardAPI.categoryGoodsCount
  })
}

export const getCategoryGoodsSale = () => {
  return myAxios.request({
    url: DashboardAPI.categoryGoodsSale
  })
}

export const getCategoryGoodsFavor = () => {
  return myAxios.request({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export const getAddressGoodsSale = () => {
  return myAxios.request({
    url: DashboardAPI.addressGoodsSale
  })
}

// 方式一 ：手动修改，每次build时修改环境，把其余两个注释掉,然后把环境变量暴漏

// 开发环境下的服务器
// export const BASE_URL = '//http://httpbin.org/dev'
// export const BASE_NAME = '张三'
// 生产环境
// const BASE_URL = '//http://httpbin.org/prod'
// const BASE_NAME = '张三'
//测试环境
// const BASE_URL = '//http://httpbin.org/tset'
// const BASE_NAME = '张三'

//方式二 ：根据process.env.NODE_ENV动态获取当前环境，webpack的definePlugin会把当前的环境动态注入给process.env.NODE_ENV
//1,开发环境下:development
//2,生产环境下:production
//3,测试环境:test
// export let BASE_URL = '' //把环境变量导出，开发时使用
// export let BASE_NAME = ''
// // 可以判断环境动态赋值
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = '//http://httpbin.org/dev'
//   BASE_NAME = '张三'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = '//http://httpbin.org/prod'
//   BASE_NAME = '张三'
// } else {
//   BASE_URL = '//http://httpbin.org/tset'
//   BASE_NAME = '张三'
// }

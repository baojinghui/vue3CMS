//方式二 ：根据process.env.NODE_ENV动态获取当前环境，webpack的definePlugin会把当前的环境动态注入给process.env.NODE_ENV
//1,开发环境下:development
//2,生产环境下:production
//3,测试环境:test
export let BASE_URL = '' //把环境变量导出，开发时使用
export const TIME_OUT = 10000
// 可以判断环境动态赋值
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api' //http://152.136.185.210:5000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '//http://httpbin.org/prod'
} else {
  BASE_URL = '//http://httpbin.org/tset'
}

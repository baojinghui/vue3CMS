// //axios导出的就是一个实例对象，可以直接使用上面的方法
// import axios from 'axios'
// axios.defaults.baseURL = 'http://httpbin.org'
// //1, axios第一种发请求的方式
// axios.request({
//   method: 'GET',
//   url: '/get',
// })

// //2, 模拟get请求，传入参数 params参数会被转换为query参数形式发送
// axios
//   .get('/get', {
//     params: {
//       name: 'zs',
//       age: '18',
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })
// //3, 模拟post请求 data中的参数会作为params参数发送,同时post请求还支持query类型的参数
// axios
//   .post('/post', {
//     data: {
//       name: 'zs',
//       age: '18',
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })

// //4, axios.all 使用场景：当我们发送多个请求时希望多个请求的数据同时回来。得到的是一个数组，数组中是AxiosResponse类型的数据
// axios
//   .all([
//     axios.get('/get', { params: { name: '张三', age: 18 } }),
//     axios.post('/post', { data: { name: '张三', age: 18 } }),
//   ])
//   .then((res) => {
//     console.log(res)
//   })

// //5, axios的拦截器,f1为请求/响应成功的回调，f2为请求/响应失败的回调，可以省略
// axios.interceptors.request.use(
//   (config) => {
//     //想做的操作
//     //如，添加token
//     //添加请求动画
//     return config
//   },
//   (err) => {
//     console.log(`请求发送失败${err}`)
//   }
// )
// axios.interceptors.response.use(
//   (res) => {
//     console.log('请求拦截成功')
//     return res.data //.data中才是服务器返回的数据
//   },
//   (err) => {
//     console.log('服务器响应失败')
//     return err
//   }
// )

// // Promise本身可以有类型<number>可以限制resolve，resject的参数类型和then后res的参数类型,必须保持一致
// new Promise<number>((resolve) => {
//   resolve(555)
// }).then((res) => {
//   console.log(res)
// })

console.log(process.env.VUE_APP_DIY)
console.log(process.env.BASE_URL)

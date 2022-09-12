const { defineConfig } = require('@vue/cli-service')
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  //打包文件的出口
  outputDir: './build',
  //打包后加载资源对应的路径，部署服务器时不需要改,本地看运行结果时可以打开看看测试一下
  // publicPath: './',
  //配置跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        // target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true,
  //注意要放在configureWebpack里，不然会报错“plugins” is not allowed，这里官网未提示
  configureWebpack: {
    //webpack配置element-plus自动导入
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})

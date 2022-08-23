const { defineConfig } = require('@vue/cli-service')
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  outputDir: './build',
  // publicPath: './', //打包后加载资源对应的路径，部署服务器时不需要改,本地看运行结果时可以打开看看测试一下
  transpileDependencies: true,
  //注意要放在configureWebpack里，不然会报错“plugins” is not allowed，这里官网未提示
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

//国际化的类型声明
declare module 'element-plus/dist/locale/zh-cn.mjs'

declare module '*.json' {
  const value: any
  export default value
}

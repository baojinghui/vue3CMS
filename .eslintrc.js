module.exports = {
  root: true,
  env: {
    node: true
  },
  //这里配置的为项目中代码要符合的规范，从第一个继承到最后一个，如果冲突最后一个会覆盖
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //关闭组件必须是多名字的提示
    'vue/multi-word-component-names': 'off',
    //关闭模板没有根组件的的提示
    'vue/valid-template-root': 'off',
    //关闭any警告
    '@typescript-eslint/no-explicit-any': 'off',
    //关闭headers.属性 的警告
    'no-undef': 'off',
    //
    'vue/no-mutating-props': 'off'
  }
}

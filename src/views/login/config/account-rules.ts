import type { FormRules } from 'element-plus' //导入表单验证的类型
import { reactive } from 'vue'
//配置表单验证规则
export const rules = reactive<FormRules>({
  //定义name的验证规则,数组中可以定义多个验证规则
  name: [
    {
      //失去焦点后判断是否填写用户名,没填提示
      required: true,
      message: '请填写用户名',
      trigger: 'blur'
    },
    {
      //失去焦点后判断用户名是否符合正则,没填提示
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      //失去焦点后判断是否填写密码,没填提示
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      //失去焦点后判断密码是否符合正则,没填提示
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码安全性不足',
      trigger: 'blur'
    }
  ]
})

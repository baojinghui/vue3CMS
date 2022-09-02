import type { FormRules } from 'element-plus' //导入表单验证的类型
import { reactive } from 'vue'
//配置表单验证规则
export const rules = reactive<FormRules>({
  //定义name的验证规则,数组中可以定义多个验证规则
  num: [
    {
      //失去焦点后判断是否填写用户名,没填提示
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      //失去焦点后判断用户名是否符合正则,没填提示
      pattern: /^[0-9]{11}$/,
      message: '必须为11位手机号哦',
      trigger: 'blur'
    }
  ],
  code: [
    {
      //失去焦点后判断是否填写密码,没填提示
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      //失去焦点后判断密码是否符合正则,没填提示
      pattern: /^[0-9]{6}$/,
      message: '验证码输入错误',
      trigger: 'blur'
    }
  ]
})

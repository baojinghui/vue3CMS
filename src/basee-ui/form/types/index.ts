//传递接收参数对象的类型
import type { FormRules } from 'element-plus' //导入表单验证的类型
type MyFormItemType = 'input' | 'select' | 'password' | 'datepicker'

//el-from-item的类型,input配置对象的类型
export interface MyFormItem {
  type: MyFormItemType
  label?: string
  rules?: FormRules[]
  placeholder?: any
  options?: any
  otherOption?: any
}

//整个表单的类型
export interface MyFormType {
  formItems: MyFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}

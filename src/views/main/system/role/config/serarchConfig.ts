//根据baseUI总的my-form 配置出来的search组件的配置文件
import { MyFormType } from '@/basee-ui/form/index'
export const searchFormConfig: MyFormType = {
  //配置表单
  formItems: [
    {
      filse: 'id',
      type: 'input',
      label: 'ID',
      rules: [],
      placeholder: '请输入ID'
    },
    {
      filse: 'intro', //标识
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      filse: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}

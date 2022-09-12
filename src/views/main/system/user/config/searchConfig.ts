//根据baseUI总的my-form 配置出来的search组件的配置文件
import { MyFormType } from '@/basee-ui/form/index'
export const formConfig: MyFormType = {
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
      filse: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      filse: 'realname',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      filse: 'cellphone',
      type: 'input',
      label: '手机号',
      rules: [],
      placeholder: '请输入手机号'
    },
    {
      filse: 'enable',
      type: 'select',
      label: '是否可用',
      placeholder: '请选择用户状态',
      options: [
        {
          title: '启用',
          value: '1'
        },
        {
          title: '禁用',
          value: '0'
        }
      ]
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
  ],
  //配置表单的lable宽度
  labelWidth: '100px',
  //配置表单样式
  itemStyle: { padding: '10 40px' },
  //配置相应式布局
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
}

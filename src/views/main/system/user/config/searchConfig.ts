//根据baseUI总的my-form 配置出来的search组件的配置文件
import { MyFormType } from '@/basee-ui/form/index'
export const formConfig: MyFormType = {
  //配置表单
  formItems: [
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      rules: [],
      placeholder: '请选择运动',
      options: [
        {
          title: '篮球',
          value: 'basketball'
        },
        {
          title: '足球',
          value: 'football'
        }
      ]
    },
    {
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

import { MyFormType } from '@/basee-ui/form/types/index'
export const modalConfig: MyFormType = {
  formItems: [
    {
      filse: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      filse: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {},
  labelWidth: '80px'
}

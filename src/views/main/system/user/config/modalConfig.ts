import { MyFormType } from '@/basee-ui/form/types/index'
export const modalConfig: MyFormType = {
  formItems: [
    {
      filse: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filse: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      filse: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输密码',
      isHidden: true
    },
    {
      filse: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      filse: 'departmentId',
      type: 'select',
      label: '部门',
      placeholder: '请先选择部门',
      options: []
    },
    {
      filse: 'roleId',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {},
  labelWidth: '80px'
}

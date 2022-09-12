export const contentTableConfig = {
  //是否显示索引
  showIndexColumn: true,
  //是否显示选中的复选框
  showSelectColumn: true,
  //当前的所展示列表的名字
  title: '用户列表',
  //展示表格table的配置，所要展示的属性
  //slotName字段表示是否添加动态的具名作用域插槽
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '50', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createTime'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateTime'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handler'
    }
  ]
}

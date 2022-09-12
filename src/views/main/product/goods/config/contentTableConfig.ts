export const contentTableConfig = {
  //是否显示索引
  showIndexColumn: true,
  //是否显示选中的复选框
  showSelectColumn: true,
  //当前的所展示列表的名字
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '40'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '60'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '60'
    },
    {
      prop: 'imgUrl',
      label: '商品样图',
      minWidth: '80',
      slotName: 'image'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '80',
      slotName: 'createAt'
    },
    { prop: 'enable', label: '状态', minWidth: '50', slotName: 'status' },
    { label: '操作', slotName: 'handler' }
  ]
}

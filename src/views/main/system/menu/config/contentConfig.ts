export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    {
      prop: 'name',
      label: '菜单名',
      minWidth: '60'
    },
    {
      prop: 'url',
      label: '菜单名称',
      minWidth: '60'
    },
    {
      prop: 'type',
      label: '菜单等级',
      minWidth: '60'
    },
    {
      prop: 'icon',
      label: '图标',
      minWidth: '60'
    },
    {
      prop: 'permission',
      label: '权限按钮',
      minWidth: '120'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '80',
      slotName: 'updateTime'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}

<template>
  <div class="user">
    <!-- 搜索框组件 -->
    <page-search
      :searchFormConfig="formConfig"
      @searchBtnClick="searchBtnClick"
      @resetBtnClick="resetBtnClick"
    ></page-search>

    <!-- table列表区组件 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    ></page-content>

    <!-- 添加的模态框 -->
    <page-modal
      pageName="users"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
//search的组件及配置
import PageSearch from '@/components/page-search/index'
import { formConfig } from './config/searchConfig'

//table高级组件及配置文件
import PageContent from '@/components/page-content/index'
import { contentTableConfig } from './config/contentConfig'
import { UsePageSearch } from '@/hooks/use-page-search'

//新建或编辑的模态框
import PageModal from '@/components/page-modal/index'
import { modalConfig } from './config/modalConfig'
import { usePageModal } from '@/hooks/use-page-modal'

import { useStore } from '@/store/index'
import { computed } from 'vue'
const store = useStore()
//子组件点击搜索或重置出发的事件
const [pageContentRef, searchBtnClick, resetBtnClick] = UsePageSearch()

//处理编辑无密码框,添加有密码框的逻辑
//当配置属性有isHodden时，如果点击新建把isHidden=false,隐藏密码框
const newCallBack = () => {
  const passwordItem = modalConfig.formItems.find((item) => {
    return item.filse === 'password'
  })
  if (passwordItem) passwordItem.isHidden = false
}

const editCallBack = () => {
  const passwordItem = modalConfig.formItems.find((item) => {
    return item.filse === 'password'
  })
  if (passwordItem) passwordItem.isHidden = true
}

//把数据给变为响应式数据，当请求成功数据回来时引起页面刷新
const modalConfigRef = computed(() => {
  //动态添加部门的列表
  const departmentItem: any = modalConfig.formItems.find((item): any => {
    return item.filse == 'departmentId'
  })
  departmentItem.options = store.state.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })

  //动态添加角色的列表
  const roleItem: any = modalConfig.formItems.find((item) => {
    return item.filse == 'roleId'
  })
  roleItem.options = store.state.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})

//子组件点击新建或编辑的hooks
const [defaultInfo, pageModalRef, newBtnClick, editBtnClick] = usePageModal(
  newCallBack,
  editCallBack
)
</script>

<style lang="less" scoped></style>

<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @searchBtnClick="searchBtnClick"
      @resetBtnClick="resetBtnClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      ref="pageContentRef"
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    >
    </page-content>
    <page-modal
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
      pageName="role"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    >
      <div class="menuTree">
        <el-tree
          :data="menus"
          :props="{ children: 'children', label: 'name' }"
          node-key="id"
          show-checkbox
          @check="handleCheckChange"
          ref="elTreeRef"
        />
      </div>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ElTree } from 'element-plus'
import PageContent from '@/components/page-content/index'
import { contentTableConfig } from './config/contentConfig'

import PageSearch from '@/components/page-search/index'
import { searchFormConfig } from './config/serarchConfig'

import PageModal from '@/components/page-modal/index'
import { modalConfig } from './config/modalConfig'
import { UsePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store/index'
import { computed, ref, nextTick } from 'vue'
import { getMenuLeafKeys } from '@/utils/map-menus'
const [pageContentRef, searchBtnClick, resetBtnClick] = UsePageSearch()

const elTreeRef = ref<InstanceType<typeof ElTree>>()
//拿到当前role页面,点击编辑当前行的的数据.传入hook返回数据,回显树结构
const getTreeRowData = (item: any) => {
  const leafLeys = getMenuLeafKeys(item.menuList)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafLeys)
  })
}

const [defaultInfo, pageModalRef, newBtnClick, editBtnClick] =
  usePageModal(getTreeRowData)

const otherInfo = ref({})
//拿到响应式的menu数据,并展树形结构
const store = useStore()
const menus = computed(() => {
  return store.state.entireMenu
})
const handleCheckChange = (data1: any, data2: any) => {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}
//数型结构狗数据回显
</script>

<style lang="less" scoped>
.menuTree {
  margin-left: 25px;
}
</style>

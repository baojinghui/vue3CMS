<template>
  <page-search
    @searchBtnClick="searchBtnClick"
    @resetBtnClick="resetBtnClick"
    :searchFormConfig="goodsSearchConfig"
  ></page-search>
  <page-content
    pageName="goods"
    :contentTableConfig="contentTableConfig"
    ref="pageContentRef"
  >
    <template #image="{ row }">
      <el-image
        :src="row.imgUrl"
        style="width: 60px; height: 60px"
        :preview-src-list="[row.imgUrl]"
        preview-teleported
      >
      </el-image>
    </template>
  </page-content>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/contentTableConfig'
import PageSearch from '@/components/page-search/index'
import { goodsSearchConfig } from './config/searchConfig'

//搜索对应的方法
import { UsePageSearch } from '@/hooks/use-page-search'
const [pageContentRef, searchBtnClick, resetBtnClick] = UsePageSearch()
</script>

<style lang="less" scoped>
.el-image {
  z-index: 99999 !important;
}
</style>

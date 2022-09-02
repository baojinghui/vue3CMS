<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item></template
    >
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { MyBreadcrumbs } from '../types/index'
import { PropType } from 'vue'
defineProps({
  breadcrumbs: {
    type: Array as PropType<MyBreadcrumbs[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>

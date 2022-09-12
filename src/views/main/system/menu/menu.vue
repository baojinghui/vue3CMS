<template>
  <page-content
    :contentTableConfig="contentTableConfig"
    pageName="menu"
  ></page-content>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/index'
import { contentTableConfig } from './config/contentConfig'
</script>

<style lang="less" scoped></style>

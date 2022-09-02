<template>
  <div class="user">
    <div class="search">
      <my-form v-bind="formConfig" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyForm from '@/basee-ui/form/index'
import { formConfig } from './config/searchConfig'
</script>

<style lang="less" scoped></style>

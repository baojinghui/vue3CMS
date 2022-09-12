<template>
  <div class="search">
    <my-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="slot-header">高级检索</h2>
      </template>
      <template v-slot:footer>
        <div class="slot-btns">
          <el-button @click="handleResizeClick"
            ><el-icon><Switch /></el-icon>重置</el-button
          >
          <el-button type="primary" @click="handleSearchClick">
            <el-icon><Search /></el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </my-form>
  </div>
</template>

<script setup lang="ts">
import MyForm from '@/basee-ui/form/index'
import { ref } from 'vue'
const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['resetBtnClick', 'searchBtnClick'])
//得到双向绑定的全部字段,值设置为空
const originFilse: any = {}
props.searchFormConfig.formItems.forEach((item: any) => {
  originFilse[item.filse] = ''
})
//收集需要双向绑定的数据
const formData = ref(originFilse)
//当用户点击重置按钮重置表单数据
const handleResizeClick = () => {
  for (const key in originFilse) {
    formData.value[key] = originFilse[key]
  }
  emit('resetBtnClick')
}
//当点击搜索
const handleSearchClick = () => {
  emit('searchBtnClick', formData.value)
}
</script>

<style lang="less" scoped>
.slot-header {
  text-align: center;
}
.slot-btns {
  text-align: right;
  padding: 0 50px 10px 0;
}
</style>

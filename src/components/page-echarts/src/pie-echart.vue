<template>
  <my-echart :options="options"></my-echart>
</template>

<script setup lang="ts">
import MyEchart from '@/basee-ui/echart/index'
import { computed } from 'vue'
import { IDataType } from '../types/index'

//传入data的配置
const props = defineProps<{
  pieData: IDataType[]
}>()

//收集props的依赖实现响应式
const options = computed(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '分类数据',
      type: 'pie',
      radius: '50%',
      data: props.pieData
    }
  ]
}))
</script>

<style lang="less" scoped></style>

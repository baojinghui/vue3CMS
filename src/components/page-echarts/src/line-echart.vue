<template>
  <my-echart :options="options"></my-echart>
</template>

<script setup lang="ts">
import MyEchart from '@/basee-ui/echart/index'
import { computed } from 'vue'

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options = computed(() => {
  return {
    toolTip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.xLabels
    },
    legend: {},
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分类销量',
        type: 'line',
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>

<template>
  <my-echart :options="options"></my-echart>
</template>

<script setup lang="ts">
import MyEchart from '@/basee-ui/echart/index'
import { computed } from 'vue'
import { IDataType } from '../types/index'

const props = defineProps<{ roseData: IDataType[] }>()

const options = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 120],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>

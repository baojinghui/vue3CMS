<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults, watchEffect } from 'vue'
import useEchart from '../hooks/use-echart'
//定义props//设置默认值
const props = withDefaults(
  defineProps<{
    options: any
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
//获取容器
const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { setOptions } = useEchart(echartDivRef.value!)

  //收集props.options的依赖，数据改变时刷新
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="less" scoped></style>

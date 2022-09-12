<template>
  <el-row gutter="10">
    <el-col :span="7">
      <my-card title="分类商品数量(饼图)">
        <pie-echart :pieData="categoryGoodsCount"></pie-echart>
      </my-card>
    </el-col>
    <el-col :span="10">
      <my-card title="不同城市商品销量">
        <map-echart :mapData="addressGoodsSale"></map-echart>
      </my-card>
    </el-col>
    <el-col :span="7">
      <my-card title="分类商品数量(玫瑰图)">
        <rose-echart :roseData="categoryGoodsCount"></rose-echart>
      </my-card>
    </el-col>
  </el-row>
  <el-row gutter="10" style="margin-top: 20px">
    <el-col :span="12">
      <my-card title="分类商品销量">
        <line-echart v-bind="categoryGoodsSale"></line-echart>
      </my-card>
    </el-col>
    <el-col :span="12">
      <my-card title="分类商品的收藏">
        <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
      </my-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import MyCard from '@/basee-ui/card/index'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts/index'
import { computed } from 'vue'
const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')

//获取饼图展示的数据并渲染//获取玫瑰图数据
const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})

//获取折线图的数据
const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return { xLabels, values }
})

//柱状图数据
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})

//地图数据
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style lang="less" scoped></style>

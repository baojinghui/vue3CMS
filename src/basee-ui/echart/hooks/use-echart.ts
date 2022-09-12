//降低项目的耦合性，当项目中所依赖的框架发生改变时，可以直接来这里修改
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData as any)

export default (el: HTMLElement) => {
  //拿到echart的实例
  const echartInstance = echarts.init(el)
  //传入并设置echart的配置
  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }
  //当浏览器窗口发生变化时echart重绘
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return {
    echartInstance,
    setOptions
  }
}

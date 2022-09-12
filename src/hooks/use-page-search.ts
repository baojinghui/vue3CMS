//搜索组件对应的事件
import { ref } from 'vue'
import PageContent from '@/components/page-content/index'
export const UsePageSearch = (): any[] => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  //点击搜索按钮
  const searchBtnClick = (searchInfo: any) => {
    pageContentRef.value?.getPageData(searchInfo)
  }
  //点击重置按钮
  const resetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }
  return [pageContentRef, searchBtnClick, resetBtnClick]
}

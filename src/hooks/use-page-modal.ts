//新建和编辑
import PageModal from '@/components/page-modal/index'
import { ref } from 'vue'
type CallBack = (item?: any) => void
export const usePageModal = (
  editCallBack?: CallBack,
  newCallBack?: CallBack
): any => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  //通过子组件触发自定义事件拿到当前行的内容
  const defaultInfo = ref({})

  //点击新建按钮
  const newBtnClick = () => {
    if (pageModalRef.value) {
      pageModalRef.value.showDialog = true
    }
    defaultInfo.value = {}
    newCallBack && newCallBack()
  }

  //点击编辑按钮,让数据回显，并隐藏密码框
  const editBtnClick = (item: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.showDialog = true
    }
    defaultInfo.value = item
    editCallBack && editCallBack(item)
  }
  return [defaultInfo, pageModalRef, newBtnClick, editBtnClick]
}

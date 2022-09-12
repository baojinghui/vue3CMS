<template>
  <div class="page-modal">
    <el-dialog
      v-model="showDialog"
      title="添加用户"
      width="30%"
      center
      destroy-on-close
    >
      <my-form v-bind="modalConfig" v-model="formData"></my-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDialog = false">取消</el-button>
          <el-button type="primary" @click="handleConfirClck">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MyForm from '@/basee-ui/form/index'
import { useStore } from '@/store/index'

const props = defineProps({
  //模态框的配置项
  modalConfig: {
    type: Object,
    required: true,
    default: () => ({})
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})
const store = useStore()

//是否显示对话框
const showDialog = ref(false)

//匹配filse字段，找到并收集所对应的值
const formData = ref<any>({})
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[item.filse] = newValue[item.filse]
    }
  },
  {
    immediate: true
  }
)

//点击确认的逻辑
const handleConfirClck = () => {
  showDialog.value = false
  //如果为编辑
  if (Object.keys(props.defaultInfo).length) {
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  } else {
    //新建
    store.dispatch('system/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
}

defineExpose({ showDialog })
</script>

<style lang="less" scoped></style>

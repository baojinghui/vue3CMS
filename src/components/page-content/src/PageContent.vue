<template>
  <div class="content">
    <my-table
      :dataList="dataList"
      :totalList="totalList"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 头部的剧名插槽 -->
      <template #headerHandle>
        <el-button type="primary" v-if="isCreate" @click="handleNewBuild">
          <el-icon>
            <Plus />
          </el-icon>
          添加{{ pageName }}
        </el-button>
      </template>

      <!-- 公共组件的动态插槽 -->

      <!-- 状态的动态具名作用域插槽 -->
      <template #status="{ row }">
        <el-button
          size="small"
          plain
          :type="row.enable || row.status ? 'success' : 'danger'"
          >{{ row.enable || row.status ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!-- 创建时间的动态具名作用域插槽 -->
      <template #createTime="{ row }">
        {{ $dateFormat(row.createAt) }}
      </template>
      <!-- 更新时间的动态具名作用域插槽 -->
      <template v-slot:updateTime="{ row }">
        {{ $dateFormat(row.updateAt) }}
      </template>
      <!-- handler的动态具名插槽(是否需要加按钮) -->
      <template #handler="{ row }">
        <div class="edit">
          <el-button
            size="small"
            type="primary"
            v-if="isUpdate"
            text
            @click="handleEdit(row)"
          >
            <el-icon>
              <Edit />
            </el-icon>
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            v-if="isDelete"
            text
            @click="deleteListById(row)"
          >
            <el-icon> <Edit /></el-icon>
            删除</el-button
          >
        </div>
      </template>

      <!-- 其他组件的动态插槽 -->

      <!-- 创建动态插槽接受每个组件中传来的自定义的列 -->
      <template
        v-for="slotProp in otherSlot"
        :key="slotProp.slotName"
        #[slotProp.slotName]="{ row }"
      >
        <template v-if="slotProp.slotName">
          <slot :name="slotProp.slotName" :row="row"> </slot>
        </template>
      </template>
    </my-table>
  </div>
</template>

<script setup lang="ts">
//封装的表格组件
import MyTable from '@/basee-ui/table'
import { useStore } from '@/store'
import { computed, ref, watch } from 'vue'
import { usePermission } from '@/hooks/use-permission'

const emit = defineEmits(['newBtnClick', 'editBtnClick'])
const store = useStore()
const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
  contentTableConfig: {
    type: Object,
    required: true
  }
})

//哪一个页面的配置
// eslint-disable-next-line vue/no-setup-props-destructure
const pageName = props.pageName

//双向绑定的分页器所处的页面信息
const pageInfo = ref({
  currentPage: 1,
  pageSize: 10
})
watch(pageInfo, () => {
  getPageData()
})

//查看用户是否有权限
const isCreate = usePermission(pageName, 'create')
const isUpdate = usePermission(pageName, 'update')
const isDelete = usePermission(pageName, 'delete')
const isQuery = usePermission(pageName, 'query')

//通知仓库请求用户列表的数据
const getPageData = (searchInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName,
    queryInfo: {
      ...searchInfo,
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize
    }
  })
}
//初始化时调用一次
getPageData()

//从仓库拿到用户列表
const dataList = computed(() => {
  return store.getters['system/pageListData'](pageName)
})

//从仓库中拿到数据的条数
const totalList = computed(() => {
  return store.getters['system/pageListCount'](pageName)
})

//过滤掉公共的插槽，其余的插槽通过父组件动态添加
const otherSlot = props.contentTableConfig.propList.filter((item: any) => {
  if (item.slotName == 'status') return false
  if (item.slotName == 'createTime') return false
  if (item.slotName == 'updateTime') return false
  if (item.slotName == 'handler') return false
  return true
})

//删除//新建//编辑操作
const deleteListById = (row: any) => {
  const { id } = row
  store.dispatch('system/deleteList', { pageName, id })
}
const handleNewBuild = () => {
  emit('newBtnClick')
}
const handleEdit = (item: any) => {
  emit('editBtnClick', item)
}
//暴漏方法让父组件拿到方法
defineExpose({ getPageData })
</script>

<style lang="less" scoped>
.content {
  padding-top: 20px;
  border-top: 20px solid #f0f2f5;
}
.edit {
  display: flex;
  justify-content: space-around;
}
</style>

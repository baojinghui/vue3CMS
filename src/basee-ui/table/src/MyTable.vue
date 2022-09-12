<template>
  <div class="myTable">
    <div class="header">
      <div>
        {{ title }}
      </div>
      <slot name="headerHandle"> </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <!-- 是否显示每一项前的复选框 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="60"
        align="center"
      ></el-table-column>
      <!-- 是否显示显示索引的一列 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        align="center"
        label="序号"
        width="80"
      ></el-table-column>
      <!-- 用户列表 -->
      <template v-for="propItem in propList" :key="propItem.label">
        <el-table-column align="center" v-bind="propItem" show-overflow-tooltip>
          <!-- el内部有作用域插槽,会把每一行的信息回传scope.row -->
          <template #default="{ row }">
            <slot :name="propItem.slotName" :row="row">
              <!-- 在作用域插槽中使用具名作用域插槽，把数据传递出去 -->
              {{ row[propItem.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <div class="pagination">
          <el-pagination
            v-model:currentPage="page.currentPage"
            v-model:page-size="page.pageSize"
            :page-sizes="[10, 20, 30]"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :total="totalList"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
//接受tab的配置
const props = defineProps({
  //总共的数据列表
  dataList: {
    type: Array,
    default: () => []
  },
  //要展示列表的属性配置
  propList: {
    type: Array as any,
    default: () => []
  },
  //服务器返回要展示的列表条数
  totalList: {
    type: Number,
    default: 0
  },
  //是否展示索引
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  //是否展示复选框
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  //列表的介绍
  title: {
    type: String,
    default: ''
  },
  //分页器的配置信息
  page: {
    type: Object,
    default: () => ({
      currentPage: 0,
      pageSize: 10
    })
  },
  //是否把单元格展开
  childrenProps: {
    type: Object,
    required: false
  },
  //是否显示分页器
  showFooter: {
    type: Boolean,
    default: () => true
  }
})

const emit = defineEmits(['update:page'])
//
const handleSelectionChange = (a: any, b: any) => {
  console.log(a)
  console.log(b)
}
//当前页数发生变化时
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}

//当前要展示的的条数发生变化时
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  padding: 0 15px 15px;
  justify-content: space-between;
  align-items: center;
}
.pagination {
  background-color: #ffffff;
  padding-left: 35%;
}
</style>

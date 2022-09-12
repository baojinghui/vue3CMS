<!-- 表单和el-input的配置文件 -->
<template>
  <div class="my-form">
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <!-- 如果为表单是 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formData[item.filse]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <!-- 如果为下拉菜单时 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[item.filse]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    :label="option.title"
                  />
                </el-select>
              </template>
              <!-- 如果为日期表单时 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[item.filse]"
                  style="width: 100%"
                  v-bind="item.otherOption"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MyFormItem } from '../types'
import { PropType, ref, watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  formItems: {
    type: Array as PropType<MyFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({
      padding: '10px 30px'
    })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const emit = defineEmits(['update:modelValue'])
//这里要让数据成为单向流时需要触发事件并返回，但是当数据为复杂刷剧类型时，
//computed的set不能调用emit事件，返回新的数据，而是直接修改的数据的引用，相当于修改props，
//解决方案，进行一次拷贝，返回新的值
const formData = ref({ ...props.modelValue })
watch(formData, (newVal) => emit('update:modelValue', newVal), { deep: true })
</script>

<style lang="less" scoped>
.my-form {
  padding-top: 15px;
}
</style>

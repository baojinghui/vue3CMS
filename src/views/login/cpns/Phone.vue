<!-- 手机号验证登录组件 -->
<template>
  <div class="login-phone">
    <!-- 表单 -->
    <el-form :rules="rules" :model="phone">
      <!-- 手机号 -->
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item class="code" label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code"> </el-input>
          <el-button class="btn" type="primary" @click="getCode"
            >点击发送验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
//导入表单验证规则
import { rules } from '../config/phone-rules'
//收集用户手机号和验证码
const phone = reactive({
  num: '',
  code: ''
})
//发送验证码
const getCode = () => {
  console.log('验证码已发送')
}
defineExpose({
  getCode
})
</script>

<style lang="less" scoped>
.code {
  display: flex;
  .btn {
    margin-left: 10px;
  }
}
</style>

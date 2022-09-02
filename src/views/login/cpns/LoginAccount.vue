<!-- 账号登录组件 -->
<template>
  <div class="login-account">
    <!-- 表单 -->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <!-- 账号 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
//导入表单验证规则
import { rules } from '../config/account-rules'
//导入ElForm的类型
import { ElForm } from 'element-plus'
//导入本地缓存的方法
import cache from '@/utils/cache'
//导入仓库
import { useStore } from 'vuex'
import { reactive, ref } from 'vue'
//收集用户账号密码
const account = reactive({
  name: 'coderwhy', //cache.getCache('name')
  password: '123456' //cache.getCache('password')
})
//获取表单实例
const formRef = ref<InstanceType<typeof ElForm>>()
//
const store = useStore()
//验证并登录的回调
const loginAction = (isKeepPassword: boolean) => {
  // valid为布尔值，符合登录为真
  formRef.value?.validate((valid) => {
    if (valid) {
      //判断用户是否记住密码
      if (isKeepPassword) {
        cache.setCache('name', account.name)
        cache.setCache('passwod', account.password)
      } else {
        cache.removeCache('name')
        cache.removeCache('password')
      }
      //通知vuex进行登陆操作
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
//暴漏属性，让父组件通过ref调用
defineExpose({ loginAction })
</script>

<style lang="less" scoped></style>

<!-- 登陆面板组件 -->
<template>
  <div class="login-panel">
    <h2 class="text">后台管理系统</h2>
    <!-- 登陆组件 -->
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <!-- 用户登录 -->
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>用户登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <!-- 手机登录 -->
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <!-- 密码控制区域 -->
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <!-- 登录 -->
    <el-button class="btn-login" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './LoginAccount.vue'
import Phone from './Phone.vue'
import { ref } from 'vue'
//是否记住密码的开关
let isKeepPassword = ref(true)
//定义当前所在的组件
let currentTab = ref<string>('account')
//给用户登陆组件和手机登录组件打上ref标签
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof Phone>>()
//通过ref获取用户登陆组件上的方法进行登录
const handleLoginClick = () => {
  //账号登陆
  if (currentTab.value === 'account') {
    //把是否记住密码传递给子组件，用于是否本地缓存
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.getCode()
  }
}
</script>

<style lang="less" scoped>
//element组件样式
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
//
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .text {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 5px;
  }
  .btn-login {
    width: 100%;
    margin-top: 5px;
  }
}
</style>

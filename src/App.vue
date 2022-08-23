<template>
  <div>
    <div>我是首页</div>
    <div>{{ $store.state.name }}</div>
    <router-link to="/user">去用户页</router-link>
    <hr />
    <router-link to="/login">去登录页</router-link>
    <router-view></router-view>
    <el-button type="danger">hahhh</el-button>
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>

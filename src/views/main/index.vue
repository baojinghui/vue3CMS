<template>
  <div class="out-box">
    <el-container class="content">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="aside-left">
        <!-- 左侧菜单栏组件 -->
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container class="aside-right">
        <el-header class="header">
          <!-- 头部header组件 -->
          <nav-header @controlMenu="controlMenu" />
        </el-header>
        <el-main class="main">
          <div class="page"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { ref } from 'vue'
//是否折叠
const isCollapse = ref(false)
const controlMenu = (menuStatus: boolean) => {
  isCollapse.value = menuStatus
}
</script>

<style lang="less" scoped>
.out-box {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  .content {
    height: 100%;
    width: 100%;
    background-color: #f0f2f5;
    .aside-left {
      height: 100%;
      background-color: #0c2135;
      transition: width 0.3s linear;
    }
    .aside-right {
      .header {
        height: 48px;
        background-color: #ffffff;
      }
      .main {
        height: calc(100%- 48px);
        .page {
          background-color: #ffffff;
        }
      }
    }
  }
}
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>

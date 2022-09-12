<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" />
        {{ userName }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item>用户权限</el-dropdown-item>
          <el-dropdown-item @click="handleExit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import cache from '@/utils/cache'
const store = useStore()
const router = useRouter()
//用户名及图片
const userName = computed(() => {
  return store.state.login.userInfo.name
})
//退出登录
const handleExit = () => {
  cache.removeCache('token')
  router.push('/main')
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>

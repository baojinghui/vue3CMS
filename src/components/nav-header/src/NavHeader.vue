<template>
  <div class="nav-header">
    <!-- 开启或关闭菜单栏 -->
    <div class="icon">
      <!-- 开启菜单栏 -->
      <el-icon v-if="isfold" class="fold-menu" size="30px" @click="foldMenu">
        <TurnOff />
      </el-icon>
      <!-- 关闭菜单栏 -->
      <el-icon v-else class="open-menu" size="30px" @click="foldMenu">
        <Open />
      </el-icon>
    </div>
    <div class="content">
      <!-- 面包屑 -->
      <my-breadcrumb :breadcrumbs="breadcrumbs" />
      <!-- 头像区域 -->
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './UserInfo.vue'
//导入自己封装的面包屑和传入参数的类型
import MyBreadcrumb from '@/basee-ui/breadcrumb'
import { pathMapBreadcrumb } from '@/utils/map-menus'
import { ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const emit = defineEmits(['controlMenu'])
//菜单栏是否收缩的开关
const isfold = ref(false)
//关闭菜单栏,自定义事件把开关状态传递->main->aside
const foldMenu = () => {
  isfold.value = !isfold.value
  emit('controlMenu', isfold.value)
}
//根据当前页面的路径匹配返回的菜单，得到菜单的名字，映射为面包屑

//面包屑的数据
const breadcrumbs = computed(() => {
  const path = route.path
  const menus = store.state.login.userMenus
  return pathMapBreadcrumb(menus, path)
})
</script>

<style lang="less" scoped>
.nav-header {
  height: 48px;
  width: 100%;
  align-items: center;
  display: flex;
  .icon {
    .open-menu,
    .fold-menu {
      cursor: pointer;
    }
  }
  .content {
    flex: 1;
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

<template>
  <div class="nav-menu">
    <!-- logo布局 -->
    <div class="logo">
      <img class="image" src="~@/assets/image/1logo.svg" alt="" />
      <span class="title">Vue3+ts</span>
    </div>
    <!-- 菜单栏布局 -->
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      background-color=" #001529"
      text-color="#b7bdc3"
      active-text-color="#ffffff"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 多级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon" :size="20">
                <component :is="item.icon.split('-')[2]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <!-- 二级菜单可以展开的标题 -->
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItem(subItem)"
              >
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单，只是一个按钮 -->
        <template v-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { mapMenusPath } from '@/utils/map-menus'
defineProps({
  isCollapse: Boolean
})
const store = useStore()
const router = useRouter()
const route = useRoute()
//获取用户菜单
const userMenus = computed(() => {
  return store.state.login.userMenus
})
//根据返回的url进行路跳转
const handleMenuItem = (item: any) => {
  router.push({
    path: item.url ? item.url : '/not-fount'
  })
}
//找到当前菜单的id
const path = route.path
const menu = mapMenusPath(userMenus.value, path)
//菜单所对应的标题
const defaultActive = ref(menu.id + '')
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .image {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
    }
  }
  .el-menu-vertical {
    border: none;
  }

  .el-menu-item {
    background-color: #0c2135;
  }
  .is-active,
  .is-opened {
    background-color: #0a60bd;
  }
}
</style>

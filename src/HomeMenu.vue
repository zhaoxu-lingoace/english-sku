<script>
import { HomeFilled } from "@element-plus/icons-vue";

export default {
  name: "HomeMenu",
};
</script>

<template>
  <div>
    <el-menu class="home-menu" :default-active="$route.path" router>
      <div class="top">
        <div class="logo"></div>
      </div>

      <el-menu-item index="/learn">
        <template #title>
          <el-icon><HomeFilled /></el-icon>
          <span class="text">Learn</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.home-menu {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0 12px;
  .top {
    height: 74px;
    box-sizing: border-box;
    padding: 12px;
    background-color: var(--brand-color);
    .logo {
      width: 100%;
      height: 100%;
      background: url(./logo.png) center center / 100% 100%;
    }
  }

  .text {
    font-size: var(--el-font-size-medium);
  }

  :deep(.el-menu-item) {
    margin: 12px 0;
  }
  :deep(.el-menu-item.is-active) {
    background-color: #ddf4ff;
    border: 1px solid;
    border-radius: 12px;
  }
}
</style>

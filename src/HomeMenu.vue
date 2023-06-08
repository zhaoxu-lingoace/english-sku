<script>
export default {
  name: "HomeMenu",
};
</script>

<template>
  <div>
    <el-menu class="home-menu" :default-active="$route.path" router>
      <el-menu-item index="/learn">Learn</el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.home-menu {
  border-right: none;

  :deep(.el-menu-item) {
    justify-content: center;
  }
}
</style>

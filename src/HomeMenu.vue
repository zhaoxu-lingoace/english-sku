<script>
export default {
  name: "HomeMenu",
};
</script>

<template>
  <div>
    <el-menu :default-active="$route.path" router>
      <el-menu-item index="/learn">Learn</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import HomeMenu from "@/HomeMenu.vue";
import { RouterView } from "vue-router";

export default {
  name: "HomePage",
  components: {
    HomeMenu,
  },
};
</script>

<template>
  <div style="height: 100%">
    <div class="home-page">
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <HomeMenu></HomeMenu>
          </el-scrollbar>
        </el-aside>

        <el-main>
          <el-scrollbar>
            <RouterView></RouterView>
          </el-scrollbar>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<style lang="scss">
.home-page {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
</style>

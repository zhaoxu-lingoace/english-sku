<script>
import HomeMenu from "@/HomeMenu.vue";
import { RouterView } from "vue-router";

export default {
  name: "HomeView",
  components: {
    HomeMenu,
  },
};
</script>

<template>
  <div style="height: 100%">
    <div class="home-view">
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

<script>
import { ElLoading } from "element-plus";

export default {
  name: "ImagePage",
  data() {
    return {
      viewSrc: "",
    };
  },
  mounted() {
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    setTimeout(() => {
      this.viewSrc = decodeURIComponent(this.$route.query.s);
      loading.close();
    }, 2000);
  },
  methods: {
    onFinish() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div style="height: 100%">
    <div class="image-page">
      <img class="image-view" :src="viewSrc" v-if="viewSrc" />

      <button class="finish-button" @click="onFinish">Finish</button>
    </div>
  </div>
</template>

<style>
.image-page {
  position: relative;
  height: 100%;
}
.image-view {
  width: 100%;
  height: 100%;
  border: 0;
}
.finish-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 100px;
  height: 50px;
  border: 0;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "UnityPage",
  computed: {
    viewSrc() {
      return decodeURIComponent(this.$route.query.s);
    },
  },
  methods: {
    onFinish() {
      const path = this.$route.query.p;
      if (path) {
        this.$router.push(path);
        return;
      }

      const count = this.$route.query.c || "1";
      if (count !== "3") {
        this.$router.push({
          path: "/unity",
          query: {
            s: encodeURIComponent(
              'https://cdn.lingo-ace.com/teach/pro/CourseTest/index.html?preTempId=9d025a76-6b7c-47ad-a6be-30bc44365d30&isPreview=1&loginType=0"'
            ),
            c: Number(count) + 1,
          },
        });
        return;
      }

      this.$router.push({
        path: "/image",
        query: {
          s: encodeURIComponent(
            "https://cdn.lingo-ace.com/analysis/study/static/img/zh-CN-level-0.faf8eb56.png"
          ),
        },
      });
    },
  },
};
</script>

<template>
  <div style="height: 100%">
    <div class="unity-page">
      <iframe class="unity-view" :src="viewSrc"></iframe>

      <button class="finish-button" @click="onFinish">Finish</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unity-page {
  position: relative;
  height: 100%;
  .unity-view {
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
}
</style>

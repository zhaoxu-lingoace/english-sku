<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
  },
  created() {
    this.$router.push("/boot");
  },
};
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  min-height: 100vh;
}
</style>

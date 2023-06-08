<script>
export default {
  name: 'BootOption',
  props: ['value'],
  methods: {
    onClick() {
      this.$router.push('/home')
    }
  }
}
</script>

<template>
  <div>
    <div class="boot-option" @click="onClick">
      <div class="title">{{ value.title }}</div>
      <div class="subtitle">{{ value.subtitle }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boot-option {
  width: 228px;
  height: 220px;
  background: #FFFFFF;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid rgba(112, 112, 112, 0.31);
  box-sizing: border-box;
  padding: 62px 16px 0;
  cursor: pointer;

  .title {
    font-size: var(--el-font-size-large);
    text-align: center;
    white-space: wrap;
  }

  .subtitle {
    margin-top: 16px;
    font-size: var(--el-font-size-medium);
    text-align: center;
    white-space: wrap;
  }
}
</style>

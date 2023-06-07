<script>
import BootOption from '@/BootOption.vue'

export default {
  name: 'BootView',
  components: {
    BootOption
  },
  data() {
    return {
      options: [
        {
          title: 'Is it the first time to learn English?',
          subtitle: 'From the ground up!'
        },
        {
          title: 'Not an English beginner?',
          subtitle: 'Let\'s see where you are now!'
        }
      ]
    }
  }
}
</script>

<template>
    <div style="height: 100%;">
      <div class="boot-view">
        <div class="main">
          <div class="title">See where to start</div>
          <div class="content">
            <div class="option" v-for="(v, i) in options" :key="i">
              <BootOption :value="v"></BootOption>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.boot-view {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    min-width: 472px;
    min-height: 278px;

    .title {
      font-size: var(--el-font-size-extra-large);
      text-align: center;
    }

    .content {
      margin-top: 32px;
      display: flex;
      align-items: center;

      .option {
        margin-left: 16px;
      }
    }
  }
}
</style>

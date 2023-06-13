<script>
export default {
  name: "LearnView",
  data() {
    return {
      scheduleData: [],
    };
  },
  methods: {
    onClickNodeContent() {
      this.$router.push("/course");
    },
  },
  mounted() {
    const buildLessonData = (unitId) => {
      return Array.from({ length: 3 }).map((_, i) => {
        const id = `${unitId}-${i + 1}`;
        return {
          title: `Lesson ${i + 1}`,
          subtitle: "XXX",
          id,
        };
      });
    };

    const buildUnitData = () => {
      return Array.from({ length: 3 }).map((_, i) => {
        const id = String(i + 1);
        return {
          title: `Unit ${i + 1}`,
          subtitle: "XXX",
          children: buildLessonData(id),
          id,
        };
      });
    };

    this.scheduleData = buildUnitData();
  },
};
</script>

<template>
  <div>
    <div class="learn">
      <div class="schedule">
        <div class="unit" v-for="unitItem in scheduleData" :key="unitItem.id">
          <div class="item">
            <div class="title">{{ unitItem.title }}</div>

            <div class="subtitle">{{ unitItem.subtitle }}</div>
          </div>

          <div
            class="lesson"
            v-for="lessonItem in unitItem.children"
            :key="lessonItem.id"
          >
            <div class="item" @click="onClickNodeContent">
              <div class="text">
                {{ `${lessonItem.title} - ${lessonItem.subtitle}` }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learn {
  display: flex;
  justify-content: center;
  .schedule {
    width: 500px;
    box-sizing: border-box;
    padding: 24px 14px 100px;
    .unit {
      margin-top: 32px;
      .item {
        height: 112px;
        background: #58cc02;
        border-radius: 12px;
        box-sizing: border-box;
        padding: 24px 0 0 15px;
        cursor: pointer;
        .title {
          font-size: var(--el-font-size-extra-large);
          font-weight: bold;
          color: #ffffff;
        }
        .subtitle {
          margin-top: 14px;
          font-size: var(--el-font-size-large);
          color: #ffffff;
        }
      }

      .lesson {
        box-sizing: border-box;
        padding: 16px 0 0 22px;
        .item {
          margin-bottom: 20px;
          width: fit-content;
          height: auto;
          padding: 8px 16px;
          background: #dcdcdc;
          border-radius: 12px;
          cursor: pointer;
          .text {
            font-size: var(--el-font-size-large);
            color: #707070;
          }
        }
      }
    }
  }
}
</style>

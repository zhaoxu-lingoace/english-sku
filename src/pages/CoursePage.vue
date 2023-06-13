<script>
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

export default {
  name: "CoursePage",
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      courseTitle: "",
      viewSrc: "",
      srcType: "",
      prevCourseTitle: "",
      nextCourseTitle: "",
      courseData: [
        {
          title: "知识点介绍",
          src: "",
          srcType: "",
        },
        {
          title: "认识单词",
          src: "https://test-cdn.lingo-ace.com/teach/dev/UnityHomeWork/index.html?redisKey=b4ca2fc8-c36f-4522-98cf-4e8d39b255c1&isPreView=1",
          srcType: "iframe",
        },
        {
          title: "学习发音",
          src: "",
          srcType: "",
        },
        {
          title: "单词练习",
          src: "iframe",
          srcType:
            "https://test-cdn.lingo-ace.com/teach/dev/UnityHomeWork/index.html?redisKey=f7323139-b2ea-4f55-adbb-0be7962ccf45&isPreView=1",
        },
        {
          title: "认识句型",
          src: "",
          srcType: "",
        },
        {
          title: "句型练习",
          src: "https://test-cdn.lingo-ace.com/teach/dev/UnityHomeWork/index.html?redisKey=e05bd719-8e66-4c1b-b5ed-67f149106eb0&isPreView=1",
          srcType: "iframe",
        },
        {
          title: "模拟对话",
          src: "",
          srcType: "",
        },
      ],
      courseDataIndex: 0,
    };
  },
  methods: {
    onClickPrev() {
      this.courseDataIndex -= 1;

      this.loadCourse();
    },
    onClickNext() {
      this.courseDataIndex += 1;

      this.loadCourse();
    },
    onClickFinish() {
      const path = this.$route.query.p;
      if (path) {
        this.$router.push(path);
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
    loadCourse() {
      const courseDataItem = this.courseData[this.courseDataIndex];
      this.courseTitle = courseDataItem.title;
      this.viewSrc = courseDataItem.src;
      this.srcType = courseDataItem.srcType;
      const prevCourseDataItem = this.courseData[this.courseDataIndex - 1];
      this.prevCourseTitle = prevCourseDataItem ? prevCourseDataItem.title : "";
      const nextCourseDataItem = this.courseData[this.courseDataIndex + 1];
      this.nextCourseTitle = nextCourseDataItem ? nextCourseDataItem.title : "";
    },
  },
  mounted() {
    this.loadCourse();
  },
};
</script>

<template>
  <div style="height: 100%">
    <div class="course-page">
      <div class="header">
        <div class="title">{{ courseTitle }}</div>
      </div>

      <div class="content">
        <div class="course-view">
          <iframe
            class="iframe-view"
            :src="viewSrc"
            v-if="srcType === 'iframe'"
          ></iframe>
          <img
            class="image-view"
            :src="viewSrc"
            v-else-if="srcType === 'image'"
          />
        </div>
      </div>

      <div class="footer">
        <div class="pagination">
          <el-button
            :style="{ visibility: prevCourseTitle ? 'visible' : 'collapse' }"
            @click="onClickPrev"
            ><el-icon class="el-icon--right"><ArrowLeft /></el-icon
            >{{ prevCourseTitle }}</el-button
          >
          <el-button @click="onClickNext" v-if="nextCourseTitle">
            {{ nextCourseTitle
            }}<el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
          <el-button @click="onClickFinish" v-else>
            Finish<el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-page {
  height: 100%;
  padding: 48px 24px 0;
  .header {
    display: flex;
    justify-content: center;
    .title {
      font-size: var(--el-font-size-extra-large);
    }
  }
  .content {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    .course-view {
      width: 100%;
      height: 568px;
      .iframe-view {
        width: 100%;
        height: 100%;
        border: 0;
      }
      .image-view {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
  }
  .footer {
    margin-top: 20px;
    .pagination {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<script>
export default {
  name: "LearnView",
  data() {
    return {
      treeData: [],
      treeProps: {
        class: this.getNodeClass,
      },
    };
  },
  methods: {
    getNodeClass(data, node) {
      return data.class;
    },
    onClickNodeContent() {
      this.$router.push({
        path: "/unity",
        query: {
          s: encodeURIComponent(
            "https://cdn.lingo-ace.com/teach/pro/UnityHomeWork/index.html?redisKey=c39cf4e3-3523-45e6-8d2b-169107efcd1c&isPreView=1"
          ),
          p: "/",
        },
      });
    },
  },
  mounted() {
    const buildLessonNodeData = (levelId, unitId) => {
      return Array.from({ length: 3 }).map((_, i) => {
        return {
          label: `Lesson ${i + 1}`,
          class: "lesson",
        };
      });
    };

    const buildUnitNodeData = (levelId) => {
      return Array.from({ length: 3 }).map((_, i) => {
        return {
          label: `Unit ${i + 1}`,
          class: "unit",
          children: buildLessonNodeData(levelId, i),
        };
      });
    };

    const buildLevelNodeData = () => {
      return Array.from({ length: 3 }).map((_, i) => {
        return {
          label: `level ${i + 1}`,
          class: "level",
          children: buildUnitNodeData(i),
        };
      });
    };
    this.treeData = buildLevelNodeData();
  },
};
</script>

<template>
  <div>
    <div class="learn">
      <div class="schedule" style="height: 600px">
        <el-tree
          :data="treeData"
          :props="treeProps"
          default-expand-all
          :expand-on-click-node="false"
        >
          <template #default="{ data, node }">
            <div class="node-content" @click="onClickNodeContent">
              {{ node.label }}
            </div>
          </template>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.learn {
  .schedule {
    .level {
      & > div > .node-content {
        width: 100%;
        text-align: center;
      }
      .unit {
        & > .el-tree-node__content {
          height: 100px;
        }
        & > div > .node-content {
          width: 200px;
          height: 80px;
          border: 1px solid #ccc;
          box-sizing: border-box;
          padding: 10px;
        }
        .lesson {
          & > .el-tree-node__content {
            height: 60px;
          }
          & > div > .node-content {
            width: 150px;
            height: 30px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>

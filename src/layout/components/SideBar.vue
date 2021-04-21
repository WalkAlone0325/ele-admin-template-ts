<template>
  <div class="side-bar" :class="{ minWidth: isCollapse }">
    <el-scrollbar>
      <el-menu
        :default-active="activeRoutePath"
        background-color="#3a3f51"
        text-color="#b5b6bd"
        active-text-color="rgb(79,148,212)"
        mode="vertical"
        :collapse-transition="false"
        :collapse="isCollapse"
        router
      >
        <template v-for="(item, index) in routelist">
          <template v-if="!item.children || item.children.length === 0">
            <el-menu-item :index="item.path" :key="index">
              <i :class="item.meta.icon"></i>
              <template #title>{{ item.meta.title }}</template>
            </el-menu-item>
          </template>

          <template v-if="item.children.length > 0">
            <el-submenu :index="item.path" :key="index">
              <template #title>
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </template>
              <el-menu-item
                v-for="(code, codeindex) in item.children"
                :key="codeindex"
                :index="code.path"
              >
                <i :class="code.meta.icon"></i>
                <template #title>{{ code.meta.title }}</template>
              </el-menu-item>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SideBar',
  setup() {
    const route = useRoute()
    const store = useStore()

    return {
      isCollapse: computed(() => store.getters['app/isCollapse']),
      routelist: computed(() => store.getters['app/routelist']),
      activeRoutePath: computed(() => route.path),
    }
  },
})
</script>

<style scoped lang="scss">
.side-bar {
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 200px;
  height: 100%;
  background: #3a3f51;
  transition: width 0.3s;
  &.minWidth {
    width: 64px !important;
  }
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
}
</style>
<style>
.el-menu {
  border-right: 0 !important;
}
</style>

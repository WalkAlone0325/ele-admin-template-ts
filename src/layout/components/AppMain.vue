<template>
  <div class="appmain-container" :class="{ minWidth: isCollapse }">
    <!-- :class="{ minWidth: isCollapse }" -->
    <el-scrollbar>
      <div class="main" :style="{ minHeight: pageHeight + 'px' }">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { throttle } from '@/utils/util'

export default defineComponent({
  name: 'AppMain',
  setup() {
    const store = useStore()
    const pageHeight = ref(window.innerHeight - 71)

    onMounted(() => {
      window.addEventListener(
        'resize',
        throttle(() => {
          pageHeight.value = window.innerHeight - 50 - 20 - 1
        }, 500),
        false,
      )
    })

    // const isCollapse = computed(()=>...mapGetters({ isCollapse: 'app/isCollapse' }))

    return {
      pageHeight,
      isCollapse: computed(() => store.getters['app/isCollapse']),
    }
  },
})
</script>

<style lang="scss" scoped>
.appmain-container {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 200px;
  z-index: 11 !important;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 1px;
  padding: 0 10px;
  background: #f0f3f4;
  -webkit-transition: all 0.3s;
  transition: left 0.3s;
  &.minWidth {
    left: 64px !important;
  }
  .main {
    box-sizing: border-box;
    margin-top: 10px;
    padding-bottom: 20px;
    background: #fff;
  }
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
}
</style>

<template>
  <div class="breadcrumb-comp">
    <el-breadcrumb separator="/">
      <transition-group name="slide">
        <el-breadcrumb-item
          v-for="item in breadList"
          :key="item.path + item.meta.title"
          :to="item.path"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { RouteLocationMatched, useRoute } from 'vue-router'
import { defineComponent, ref, watch, Ref } from 'vue'

export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const breadList: Ref<Array<RouteLocationMatched>> = ref([])
    const route = useRoute()

    // console.log(route.matched)
    watch(
      () => route.matched,
      () => {
        let allList = route.matched.filter((item) => {
          if (item.meta && item.meta.title) {
            if (item.redirect) {
              ;(item.path as any) = item.redirect
            }
            return true
          }
        })
        if (allList[0].path !== '/' && allList[0].path !== '/dashboard') {
          allList.unshift({ path: '/', meta: { title: '首页' } } as any)
        }
        breadList.value = allList
      },
      { immediate: true, deep: false },
    )

    return { breadList }
  },
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.slide-move {
  transition: all 0.5s;
}

.slide-leave-active {
  position: absolute;
}
</style>

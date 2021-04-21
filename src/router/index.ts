import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

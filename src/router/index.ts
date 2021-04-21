import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './routes'
import { getCookie } from '@/utils/util'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to, from, next) => {
  let getInfo = getCookie('DEFAULT_TOKEN') || ''
  if (!to.meta.notLogin) {
    if (getInfo) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    }
  } else {
    next()
  }
})

export default router

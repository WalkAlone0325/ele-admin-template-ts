import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Login from '@/views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
      hidden: true,
      notLogin: true,
    },
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      hidden: false,
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: '首页', icon: 'el-icon-s-platform' },
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
        // component: Layout,
        redirect: '/table/list',
        meta: { title: '表格', icon: 'el-icon-document' },
        children: [
          {
            path: '/table/list',
            name: 'tablelist',
            component: () => import('@/views/table/list.vue'),
            meta: { title: '简单表格', icon: 'el-icon-document-remove' },
          },
          {
            path: '/table/complex',
            name: 'tablecomplex',
            component: () => import('@/views/table/complex.vue'),
            meta: { title: '复杂表格', icon: 'el-icon-tickets' },
          },
          {
            path: '/table/complex/addupdate',
            name: 'complexaddupdate',
            component: () => import('@/views/table/add-update.vue'),
            meta: { title: '新增编辑', icon: 'el-icon-circle-plus-outline' },
          },
        ],
      },
      {
        path: '/about',
        name: 'about',
        meta: { title: '关于我们', icon: 'el-icon-menu' },
        component: () => import('@/views/about/about.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true,
    },
  },
]

export default routes

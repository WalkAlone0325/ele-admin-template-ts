import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import { store } from '@/store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import '@/assets/styles/common.scss'

const app = createApp(App)

app.use(ElementPlus).use(router).use(store).mount('#app')

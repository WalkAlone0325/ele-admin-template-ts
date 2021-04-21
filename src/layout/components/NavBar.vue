<template>
  <div class="nav-bar">
    <section class="logo" :class="{ minWidth: isCollapse }">
      <a target="_blank" href="https://github.com/WalkAlone0325" class="logoLink">
        <img src="../images/logo.png" alt="logo" />
        <span v-if="!isCollapse">后台管理</span>
      </a>
    </section>
    <section class="header-content">
      <section class="collspan dc cursor" @click="collspan">
        <img src="../images/close.png" alt="logo" v-if="!isCollapse" />
        <img src="../images/open.png" alt="logo" v-if="isCollapse" />
      </section>
      <div class="bread">
        <BreadCrumb />
      </div>

      <!-- 全屏 -->
      <section class="fullscreen cursor dc" @click="toggleFull">
        <img src="../images/fullscreen.png" alt="logo" />
      </section>

      <!-- 右侧菜单 -->
      <section class="cursor dc">
        <el-dropdown @command="handleDropLink" trigger="click">
          <span class="el-dropdown-link">
            独行
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="1">安全退出</el-dropdown-item>
              <el-dropdown-item command="2">我的博客</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, ref } from 'vue'
import { delCookie, getCookie } from '@/utils/util'
import { useRouter } from 'vue-router'
import { useToggleFull } from './use/useToggleFull'
import BreadCrumb from './BreadCrumb.vue'

export default defineComponent({
  name: 'NavBar',
  components: { BreadCrumb },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userInfo = ref({})
    const toggleFull = useToggleFull()

    userInfo.value = getCookie('DEFAULT_TOKEN') ? JSON.parse(getCookie('DEFAULT_TOKEN')) : {}

    const isCollapse = computed(() => store.getters['app/isCollapse'])

    const collspan = () => {
      store.commit('app/updateCollapse', !isCollapse.value)
    }
    // 右侧下拉菜单
    const handleDropLink = (index: number) => {
      if (index == 1) {
        delCookie('DEFAULT_TOKEN')
        router.push('/login')
      } else if (index == 2) {
        window.open('http://www.loner.shop', '_blank')
      }
    }

    return {
      userInfo,
      isCollapse,
      collspan,
      handleDropLink,
      toggleFull,
    }
  },
})
</script>

<style scoped lang="scss">
.nav-bar {
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .logo {
    overflow: hidden;
    width: 200px;
    border-bottom: 1px solid #454b61;
    background-color: #3a3f51;
    transition: width 0.3s;
    &.minWidth {
      width: 64px !important;
    }
  }
  .logoLink {
    display: inline-block;
    margin-left: 18px;
    height: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    line-height: 50px;
    text-decoration: none;
    img {
      position: relative;
      top: -3px;
      margin-right: 8px;
      height: 28px;
      vertical-align: middle;
    }
  }
  .header-content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    align-items: center;
    .collspan {
      img {
        display: block;
      }
    }
    .bread {
      display: flex;
      align-items: center;
      flex: 1;
      padding-left: 15px;
    }
    .fullscreen {
      margin-right: 30px;
      img {
        display: block;
      }
    }
  }
}
</style>

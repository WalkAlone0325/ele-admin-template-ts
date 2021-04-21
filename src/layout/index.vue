<template>
  <div class="layout-container">
    <NavBar />
    <SideBar />
    <AppMain />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import AppMain from './components/AppMain.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain,
  },
})
</script>

<style></style>

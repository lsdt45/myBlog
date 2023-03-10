<template>
  <div class="home">
    <Header />
    <LeftNavigation />
    <Main />
    <RightPanel />
  </div>
  
  
</template>

<script lang="ts" setup>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../../src/components/pages/Header.vue"
import Main from "../components/pages/Main.vue"
import LeftNavigation from "../components/pages/LeftNavigation/LeftNavigation.vue"
import RightPanel from "@/components/pages/RightPanel/RightPanel.vue";
// export default {
//   name: 'Home',
//   components: {
//     Main,
//     Header,
//     LeftNavigationVue,
//   }
// }
</script>

<style lang="scss" scoped>
  
</style>

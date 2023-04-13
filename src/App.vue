<template>
  <div id="app" class="app">
    <router-view></router-view>
    <div id="canvas-nest"></div>
  </div>
  <Footer />
</template>

<script>
import Footer from "./components/pages/Footer.vue"
import CanvasNest from 'canvas-nest.js';
import { getIpConfig, addUserInfo } from "./assets/ts/util";
import { useStore } from './store/index.ts'

export default {
  name: 'App',
  components: {
    Footer,
  },
  data() {
    return {
      config: {
        color: "0, 0, 255",
        zIndex: -2,
        count: 99,
      },
    }
  },
  async mounted() {
    let ipconfig = await getIpConfig()
    const store = useStore()
    store.updateIpconfig(ipconfig.result)
    addUserInfo(ipconfig.result)
    const dom = document.querySelector('#canvas-nest')
    const cn = new CanvasNest(dom, this.config);
    // cn.destroy();
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
body {
  background: #f2f2f2;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

#canvas-nest {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

/* app {
        display: flex;
        flex-flow: column;
    } */
</style>

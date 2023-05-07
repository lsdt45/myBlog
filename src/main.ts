import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import config from '../public/myConfig'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'github-markdown-css/github-markdown.css'
import VueHighlightJS from 'vue-highlightjs'
import VueAxios from 'vue-axios'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import './assets/scss/index.scss';
import './assets/iconfont/iconfont.css';
import { createPinia } from 'pinia'
const pinia = createPinia()

// axios.defaults.baseURL = '/api'
if(process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:8004/api'
} else {
  axios.defaults.baseURL = config.API_URL
}
createApp(App).use(router).use(ElementPlus).use(pinia).use(VueAxios, axios).use(mavonEditor).use(VueHighlightJS).mount('#app')



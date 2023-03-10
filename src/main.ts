import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '../public/config.json'
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



// axios.defaults.baseURL = '/api'
if(process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
} else {
  axios.defaults.baseURL = config.API_URL
}
createApp(App).use(store).use(router).use(ElementPlus).use(VueAxios, axios).use(mavonEditor).use(VueHighlightJS).mount('#app')


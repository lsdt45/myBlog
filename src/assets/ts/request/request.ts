import axios from "axios";
import { reject } from "lodash";
import config from 'public/myConfig'

// 根据环境切换请求url
let baseURL = ''
if(process.env.NODE_ENV == 'development') {
  baseURL = 'http://127.0.0.1:8004/api'
} else {
  baseURL = config.API_URL
}


const request = axios.create({
  baseURL,
  timeout: 80000, // 请求超时时间(毫秒)
})

// function apiAxios(url: string, params?: object) {
//   return new Promise((resolve,  reject) => {
//     let options = {
      
//     }
//     axios()
//   })
// }


export default request
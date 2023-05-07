import { jsonp } from 'vue-jsonp'
import config from 'public/myConfig'
import api from '@/assets/ts/request/api'
// 获取访问用户的ip和地区信息
export function getIpConfig() {
  return new Promise((resolve, reject) => {
    jsonp(`https://apis.map.qq.com/ws/location/v1/ip?key=${config.MapKey}`, {
      output: 'jsonp'
    }).then(resp => {
      resolve(resp)
    }).catch(err => {
      console.error(err)
    })
  })
}

/**
 * description: 添加用户地址信息
 * @param ipconfig - 用户地址信息.
 * @createTime: 2023-4-12
 */
export function addUserInfo(ipconfig) {
  let param = {
    ip: ipconfig.ip,
    ad_info: ipconfig.ad_info,
  }
  api.post('/addUserInfo/', param).then(resp => {
  }).catch(err => {
    console.error(err)
  })
}

/**
 * description: 防抖函数
 * @param fn - 需要防抖的函数.
 * @param delay - 防抖时间.
 * @return {Function} - 返回一个防抖函数.
 */
export function debounce(fn: Function, delay: number) {
  let timer:number | null  = null
  return function (this: any ,...args: any[]) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
     fn.apply(this, args)
    }, delay)
  }
}
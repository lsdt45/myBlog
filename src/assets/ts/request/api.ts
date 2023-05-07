import { reject } from "lodash";
import request from "./request";
import { AxiosResponse } from 'axios/index'

const api = {
  get,
  post
}

function get(url: string, params?: object) {
  return new Promise<AxiosResponse> ((resolve, reject) => {
    return request({
      url,
      method: 'get',
      params,
    }).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

function post(url: string, data?: object) {
  return new Promise<AxiosResponse>((resolve, reject) => {
    return request({
      url,
      method: 'post',
      data,
    }).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default api
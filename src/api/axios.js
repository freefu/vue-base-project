import axios from 'axios'
import Qs from 'qs'
// import store from '@/store'
import { MAX_TIME_OUT, HOST, SUCCESS_CODE } from './config'

const Axios = axios.create({
  baseURL: HOST, // 前缀
  timeout: MAX_TIME_OUT, // 超时时间
  responseType: 'json', // 数据格式
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// http请求拦截器<pendding>
Axios.interceptors.request.use(
  config => {
    // add loading
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data)
    }
    // set headers
    // config.headers['Session-Id'] = (localStorage.getItem('sid') !== null ? localStorage.getItem('sid') : '')
    return config
  },
  error => {
    // remove loading
    return Promise.reject(error)
  }
)

// http响应拦截器<done>
Axios.interceptors.response.use(
  response => {
    // remove loading
    let data = response.data
    if (data.code === SUCCESS_CODE) {
      if (typeof data === 'string' && data !== '') {
        data = JSON.parse(data)
      }
      return data
    } else {
      // alert data.message
      return Promise.reject(data)
    }
  },
  error => {
    // remove loading
    let message = error.message
    // 超时错误
    if (error.code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
      message = '网络请求超时，请稍后重试'
      // alert data.message
    }
    return Promise.reject(error)
  }
)

export default Axios

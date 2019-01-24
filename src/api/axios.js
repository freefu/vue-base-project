import axios from 'axios'
import Qs from 'qs'
// import store from '@/store'
import {
  MAX_TIME_OUT,
  HOST
} from './config'
// import router from '@/router/index'

const Axios = axios.create({
  baseURL: HOST, // 前缀
  timeout: MAX_TIME_OUT // 超时时间
})

// http请求拦截器<pendding>
Axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data)
    }
    // config.headers['Session-Id'] = (localStorage.getItem('sid') !== null ? localStorage.getItem('sid') : '')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http响应拦截器<done>
Axios.interceptors.response.use(
  response => {
    let data = response.data
    if (typeof data === 'string' && data !== '') {
      data = JSON.parse(data)
    }
    return response
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default Axios

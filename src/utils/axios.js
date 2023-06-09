import axios from 'axios'
import { getToken } from './storage'

import { toast } from './tool'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 往header头自动添加token
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  res => {
    // 这里直接把 data 都解析出来了
    return res.data.data
  },
  error => {
    toast(error.response.data.msg || '请求失败', 'error')
    return Promise.reject(error)
  }
)
export default service
// 引入axios.js中的axios实例
    // 编写账号密码认证相关接口的调用方法
import axios from "@/utils/axios";

  export function getCaptcha() {
    return axios.get('/sys/auth/captcha')
  }
  
  export function login(data) {
    return axios.post('/sys/auth/login', data)
  }
  
  export function logout() {
    return axios.post('/sys/auth/logout')
  }
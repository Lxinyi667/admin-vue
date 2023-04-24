import axios from '@/utils/axios'
// 编写目前后端已经实现的管理员信息相关的接口调用

export function getInfo(){
    return axios.post('/sys/user/info')
}
export function rePassword(data) {
    return axios.post('/sys/user/password', data)
  }
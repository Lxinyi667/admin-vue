import axios from '@/utils/axios'

//编写后端已经实现的系统菜单相关的接口调用
export function getInfo(){
    return axios.post('/sys/menu/nav')
}
export function getAuthority() {
    return axios.get('/sys/menu/authority')
}
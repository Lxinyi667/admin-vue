//封装常用的工具函数

import { ElMessageBox, ElNotification } from "element-plus";

    //1.封装消息提示组件【toast提示】
    export function toast(message , type="success", duration =1000){
        ElNotification({
            message,
            type,
            duration
        })
    }
    //2.封装模态弹框组件【showModal弹窗提示】
    export function showModal(content ='提示内容',type='warning',title=''){
        return ElMessageBox.confirm(content,title,{
            confirmButtonText:'确认',
            cancelButtonText:'取消',
            type
        })
    }
//封装常用的工具函数
import nprogress from "nprogress";
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
    //显示全局进度条
    export function showFullLoading(){
        nprogress.start()
    }
    //隐藏全局进度条
    export function hideFullLoading(){
        nprogress.done()
    }
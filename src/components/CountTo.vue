<script setup>
    import gsap from "gsap"
    //定义该数字动画组件的属性value，指定类型和默认值
    const props = defineProps({
        value:{
        type:Number,
        default:0
        }
    })
    const d = reactive({ num:0 })
    //定义数字动画函数，秒内从0变化到父组件通过props传入的值
    function AnimateToValue( ){
         gsap.to(d,{
            duration: 1,
            num: props.value
        })
    }
    AnimateToValue()
    //监听值的变化
    watch( ( )=>props.value, ( )=>AnimateToValue( ))


</script>

<template>
    <!-- 不保留小数 -->
    {{ d.num.toFixed(0) }}
</template>

<style scoped>

</style>
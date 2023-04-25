<script setup>
defineProps({
    title:String,//标题
    tip:String,//提示
    btns :Array//按钮组
})
//给标签配上―组颜色
const colors = ['#22d3ee' , '#22c55e' , '#d6d3d1', '#f59e0b ']

</script>

<template>
    <el-card class="shadow" >
        <template #header>
            <div class="f-between ">
                <span class="text-sm">{{ title }} </span>
                <el-tag type="danger" effect="plain">
                    {{ tip }} 
                </el-tag>
            </div>
        </template>
        <el-row :gutter="20">
            <el-col :span="6" v-for=" (item, index) in btns" :key="index">
                <el-card class="shadow" :style="{backgroundColor:colors[index]}">
                <!--在 windi.config.js 中补充了一个flex-col方向的主轴、交叉轴都对齐的样式-->
                <div class="f-col-center">
                    <span class="text-xl mb-2">{{ item.value }} </span>
                    <span class="text-xs text-gray-500">{{ item.label }}  </span>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>

</template>

<style scoped>

</style>
<script setup>
import { getStatistics1 } from '../api';

const panels =ref([])
getStatistics1()
.then(res=>{
  panels.value = res
  console.log(panels.value);
})
 
</script>

<template>
  <div class="p-3">
    <el-row :gutter="20">
      <el-col :span="6" v-for=" ( item,index) in panels" :key="index">
        <el-card class="shadow hover : ( shadow-xl bg-sky-100 opacity-70 ) cursor-pointer">
          <template #header>
            <div class="f-between ">
            <span class="text-sm">f{ item.title }</span>
            <el-tag 
                :type="item.unitcolor"
                effect="plain" >
                {{ item.unit }}
            </el-tag>
            </div>
          </template>
        <span class="text-3xl font-bold text-gray-500">
          {{ item.value }}
        </span>
        <el-divider />
        <div class="flex justify-between text-sm text-gray-500">
          <span>{{ item.subTitle }}  </span>
          <span>{{ item.subValue }}</span>
        </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>


<style scoped>

</style>
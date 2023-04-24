<!-- <script setup>
  import { ref } from 'vue';
  const msg = ref('测试自动导入')
</script>

<template>
  <div class="bg-pink-300 w-50 h-50 text-white f-center">
    <p class="text-xl">{{ msg }}</p>
  </div>
  <hello></hello>
  <el-empty description="description" />
</template> -->
// import { login } from '@/api/auth'
<script setup>

  // const form = reactive({
  //   username:'admin',
  //   password:'123456'
  // })

  // const handleLogin = ()=>{
  //     login(form).then(res =>{
  //     console.log(res);
  //   })
  // }
  const store = useAdminStore()

  const { storeLogin,getStoreInfo,storeLogout} = store  
</script>

<template>
  <div>
    <el-button type="primary" size="default" @click="storeLogin(form)">登录</el-button>
    <!-- <el-button type="primary" size="default" @click="login(form)">登录</el-button> -->
    <el-button type="primary" size="default" @click="getStoreInfo">获取当前登录者信息</el-button>
    <el-button type="primary" size="default" @click="storeLogout">退出登录</el-button>
</div>
</template>


<style scoped>

</style>
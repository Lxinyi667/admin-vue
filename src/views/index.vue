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
<script setup>
  import { login } from '@/api/auth'
  
  const form = reactive({
    username:'admin',
    password:'123456'
  })

  const handleLogin = ()=>{
      login(form).then(res =>{
      console.log(res);
    })
  }

</script>

<template>
  <div>
    <el-button type="primary" size="default" @click="handleLogin">登录</el-button>
  </div>
</template>


<style scoped>

</style>
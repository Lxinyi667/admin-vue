<script setup>
    import * as echarts from 'echarts' ;

    const current = ref( "week" )
    const options = [{
        text:"近1个月",
        value : "month"
    },{
        text: "近1周",
        value : "week"
    },{
        text: "近24小时",
        value : "hour"
    }]

    const handleChoose = ( type )=>{
        current.value = type
        getData()
    }

    let myChart = null
    onMounted( ( )=>{
        //获取到template中的ref属性为"chartRef"的div
        let chartRef = getCurrentInstance( ).ctx.$refs.chartRef
        //初始化画布
        myChart = echarts.init( chartRef ) ;
        //调用获取数据的方法
        getData( )
    })
    const getData = ( )=> {
    let option;
    option = {
        xAxis: {
            type: 'category ',
            data:['周一','周二','周三','周四','周五','周六','周日']
        },
    yAxis: {
        type: 'value '
    },
    series: [
        {
        data: [ 120,200,150,80,70,110,130],
        type: 'bar',
        showBackground : true,
        backgroundStyle: {
            color: 'rgba( 180,180,180,0.2)'
        }
        }
    ]
    };
    option && myChart.setOption( option ) ;
    }
</script>

<template>
    <el-card class=" shadow">
        <template #header>
            <div class="f-between">
                <span class="text-sm">订单统计</span>
                <div>
                    <el-check-tag v-for=" ( item, index) in options"
                        :key="index"
                        :checked="current == item.value" 
                        class="mr-2"
                        @click=" handleChoose( item.value ) ">
                        {{ item.text }}
                    </el-check-tag>
                </div>
            </div>
        </template>
        <div ref="chartRef" class="w-full h-60"></div>
    </el-card>

</template>

<style scoped>

</style>
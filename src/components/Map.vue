<template>
    <div>
        <p class="title"><i></i>疫情地图</p>
        <div id="chinaMap" ref="demo"></div>
    </div>
</template>

<script>
import * as echarts from "echarts"
import { mapData } from "../assets/map/mapData.js"
export default {
    mounted() {
        let chart = echarts.init(this.$refs.demo);
        // 注册当前使用的地图名
        echarts.registerMap("chinaMap", mapData)
        let option = {
            // 地理坐标组件
            geo: {
                type: "map",
                map: "chinaMap"
            }
        };
        chart.setOption(option);
    }
}
</script>

<style scoped>
#chinaMap {
    width: 100%;
    height: 400px;
}

.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}

.title::before {
    content: '';
    width: 5px;
    height: 20px;
    background: skyblue;
    margin-right: 10px;
}
</style>
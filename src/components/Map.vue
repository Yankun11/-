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
        var chart = echarts.init(this.$refs.demo);
        // 注册当前使用的地图名
        echarts.registerMap("chinaMap", mapData)

        var data = [
            { name: '湖北', value: 5806 },
            { name: '浙江', value: 537 },
            { name: '广东', value: 393 },
            { name: '湖南', value: 332 },
            { name: '河南', value: 278 },
            { name: '江西', value: 240 },
            { name: '安徽', value: 237 },
            { name: '重庆', value: 206 },
            { name: '山东', value: 178 },
            { name: '四川', value: 177 },
            { name: '江苏', value: 168 },
            { name: '上海', value: 128 },
            { name: '北京', value: 121 },
            { name: '福建', value: 101 },
            { name: '广西', value: 87 },
            { name: '河北', value: 82 },
            { name: '云南', value: 76 },
            { name: '陕西', value: 63 },
            { name: '黑龙江', value: 59 },
            { name: '海南', value: 46 },
            { name: '辽宁', value: 45 },
            { name: '山西', value: 39 },
            { name: '天津', value: 31 },
            { name: '甘肃', value: 29 },
            { name: '内蒙古', value: 18 },
            { name: '宁夏', value: 17 },
            { name: '吉林', value: 14 },
            { name: '新疆', value: 14 },
            { name: '贵州', value: 12 },
            { name: '香港', value: 12 },
            { name: '台湾', value: 9 },
            { name: '青海', value: 8 },
            { name: '澳门', value: 7 },
            { name: '西藏', value: 1 },

        ];

        var option = {
            title: {
                x: 'center',
                textStyle: {
                    fontSize: 24
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    var toolTiphtml = ''
                    if (isNaN(params.value)) {
                        toolTiphtml = params.name + '确诊: 0例'
                    } else {
                        toolTiphtml = params.name + '确诊: ' + params.value + '例'
                    }
                    //console.log(toolTiphtml)                        
                    return toolTiphtml;
                }
            },
            visualMap: {
                show: true,
                left: 'left',
                top: 'bottom',
                seriesIndex: [0],
                type: 'piecewise',
                pieces: [
                    { min: 4000, color: 'rgb(254,57,101)' },
                    { min: 250, max: 3999, color: 'rgb(252,157,154)' },
                    { min: 100, max: 249, color: 'rgb(249,205,173)' },
                    { min: 10, max: 99, color: 'rgb(200,200,169)' },
                    { min: 1, max: 9, color: 'rgb(131,175,155)' },
                ],
                textStyle: {
                    color: '#000000'
                }
            },
            geo: {
                show: true,
                map: "chinaMap",
                label: {
                    normal: {
                        show: true,
                        fontSize: 10,
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true, // 开启平移和缩放
                zoom: 1.2,
                itemStyle: {
                    normal: {
                        areaColor: '#FFFFFF',
                        borderColor: '#666666',
                    },
                    emphasis: {
                        areaColor: '#0099CC',
                    }
                }
            },
            series: [
                {
                    type: 'map',
                    map: "chinaMap",
                    geoIndex: 0,
                    animation: false,
                    data: data
                },
            ]
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
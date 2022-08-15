### 依赖第三方插件

1. axios
   --- npm install --save axios

2. echarts
   --- npm install --save echarts

3. swiper@3.1.1
   --- npm install --save vue-awesome-swiper@3.1.1

### 打包的注意事项

关于目录的问题
如果我们不配置任何信息，直接进行 run build，那么打包出来的项目只能运行在服务器的根目录下才能显示。
如果要在指定目录下进行显示，就要在 config.js 中配置指定的打包目录信息。

### 中国地图的静态资源获取

在网页中打开 https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
将其复制到项目中，采用 export let mapData ={地图数据} 语法使用

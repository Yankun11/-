import * as echarts from "echarts";

const install = function (Vue) {
  Object.defineProperties(Vue, {
    $charts: {
      get() {
        return {
          chinaMap(id, data) {
            this.chart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: {
                triggerOn: "click",
                enterable: true,
                formatter(data) {
                  return (
                    "<a style='color:#fff' href='#/city/" +
                    data.name +
                    "'><div><p>" +
                    data.seriesName +
                    ":" +
                    data.name +
                    "</p><p>现存确诊:" +
                    data.value +
                    "</p></div></a>"
                  );
                },
              },
              series: [
                {
                  name: "省",
                  type: "map",
                  map: "china",
                  roam: false,
                  zoom: 1.2,
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        fontSize: 8,
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      areaColor: "rgba(0,255,236,0)",
                      borderColor: "rgba(0,0,0,0.2)",
                    },
                    emphasis: {
                      areaColor: "rgba(255,180,0,0.8)",
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: "rgba(0,0,0,0.5)",
                    },
                  },
                  data: data,
                },
              ],
            };
            this.chart.setOption(option);
          },
          provinCity(id, city, data) {
            this.chart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: {
                triggerOn: "click",
                enterable: true,
                formatter(data) {
                  return (
                    "<div><p>" +
                    data.name +
                    "</p><p>现存确诊:" +
                    data.value +
                    "</p></div>"
                  );
                },
              },
              series: [
                {
                  type: "map",
                  map: city,
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        fontSize: 8,
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      areaColor: "rgba(0,255,236,0)",
                      borderColor: "rgba(0,0,0,0.2)",
                    },
                    emphasis: {
                      areaColor: "rgba(255,180,0,0.8)",
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: "rgba(0,0,0,0.5)",
                    },
                  },
                  data: data,
                },
              ],
            };
            this.chart.setOption(option);
          },
        };
      },
    },
  });
};

export default install;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/common.css";
import api from "./api/index";
// import * as echarts from 'echarts'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const app = createApp(App);


app.use(Swiper);
app.use(SwiperSlide);
app.use(router);
// app.use(echarts);
app.mount("#app");

app.config.globalProperties.$api = api;
// Vue.prototype.$api = api; 这个在vue3中已经改成了app.config.globalProperties.$api = api;

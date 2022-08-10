import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/common.css";
import api from "./api/index";

const app = createApp(App);

app.use(router);
app.mount("#app");

app.config.globalProperties.$api = api;
// Vue.prototype.$api = api; 这个在vue3中已经改成了app.config.globalProperties.$api = api;

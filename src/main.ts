import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// 引入重置样式
import "./style/reset.scss";
// 引入elementPlus样式
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");

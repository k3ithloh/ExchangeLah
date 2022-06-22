import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "flowbite";
import "vue-pagination-tw/styles";
import 'vue-transitions-css';

const app = createApp(App).use(router);
app.mount("#app");

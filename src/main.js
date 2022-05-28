import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "@/assets/carousel/flickity.css"

createApp(App).use(router).mount("#app");


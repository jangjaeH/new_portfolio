// main.js 또는 App.vue 등 앱의 진입점 파일에서 초기화
import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS의 스타일 파일을 import

createApp(App).mount("#app");

// AOS 초기화
AOS.init();

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { useRouter } from 'vue-router'
import router from "./router";

const app = createApp(App);
app.use(router)

app.mount('#app')

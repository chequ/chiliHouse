import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import router from './router/index';
import store from './store/index';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vant);
app.use(ElementPlus);

app.mount('#app');

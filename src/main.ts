import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router/index';
import store from './store/index';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Vant);
app.mount('#app');

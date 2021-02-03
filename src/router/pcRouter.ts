import { createRouter, createWebHashHistory } from 'vue-router';
import pcLogin from '../views/pc/Login.vue';
import pcIndex from '../views/pc/Index.vue';
import houseToPrice from '../views/pc/houseToPrice/houseToPrice.vue';

const pcRouter = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/login',
      component: pcLogin,
    },
    {
      path: '/',
      component: pcIndex,
      children: [
        { path: '/houseToPrice', component: houseToPrice },
      ],
    },
  ],
});

export default pcRouter;

import { createRouter, createWebHashHistory } from 'vue-router';
import appLogin from '../views/app/Login.vue';
import appIndex from '../views/app/Index.vue';

// createRouter 创建路由实例
const appRouter = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/login',
      component: appLogin,
    },
    {
      path: '/index',
      component: appIndex,
      children: [
        { path: '/', redirect: 'index' }, // 这里写跳转
      ],
    },
  ],
});

export default appRouter;

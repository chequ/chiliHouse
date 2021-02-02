// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Index from '../views/Index.vue';

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/index',
      component: Index,
      children: [
        { path: '/', redirect: 'index' }, // 这里写跳转
      ],
    },
  ],
});

// 抛出路由实例, 在 main.js 中引用
export default router;

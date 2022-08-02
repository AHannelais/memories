import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/pages/index.vue');

export const history = createWebHistory();

export const router = createRouter({
  history,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
  ],
});

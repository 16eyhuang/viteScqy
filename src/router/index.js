import { createRouter, createWebHistory } from 'vue-router'
import GetPageTelegram from '../pages/GetPageTelegram.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rootPage',
      component: GetPageTelegram,
    },
    {
      path: '/scqy',
      name: 'getPageTelegram',
      component: GetPageTelegram,
    },
  ],
});

export default router;

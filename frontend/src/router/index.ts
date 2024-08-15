import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue'),
    },
    {
      path: '/rakete',
      name: 'rakete',
      component: () => import('../views/RocketeView.vue'),
    },
    {
      path: '/wettbewerb',
      name: 'wettbewerb',
      component: () => import('../views/CompetitionView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/sponsoring',
      name: 'sponsoring',
      component: () => import('../views/SponsorView.vue'),
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImprintView.vue'),
    },
    {
      path: '/datenschutzerklärung',
      name: 'datenschutzerklärung',
      component: () => import('../views/PrivacyPolicyView.vue'),
    }
  ],
});

export default router;

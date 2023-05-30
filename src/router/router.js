import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/inicio.vue'),
    },

    {
      path: '/direitos',
      component: () => import('../views/direitos.vue'),
    },

    {
        path: '/mapa',
        component: () => import('../views/mapa.vue'),
      },
  ],
})
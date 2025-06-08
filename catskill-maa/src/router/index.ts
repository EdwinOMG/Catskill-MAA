import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MediaView from '../views/MediaView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/About',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/Media',
      name: 'Media',
      component: MediaView,
    },
    {
      path: '/Programs',
      name: 'Programs',
      component: ProgramsView,
    },
     
  ],

scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router

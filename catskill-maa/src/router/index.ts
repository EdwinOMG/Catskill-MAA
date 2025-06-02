import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoundersView from '../views/FoundersView.vue'
import TeamView from '../views/TeamView.vue'
import MediaView from '../views/MediaView.vue'
import ProgramsView from '../views/ProgramsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Founders',
      name: 'aboutFounders',
      component: FoundersView,
    },
   {
      path: '/Team',
      name: 'aboutTeam',
      component: TeamView,
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

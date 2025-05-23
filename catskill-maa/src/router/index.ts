import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoundersView from '../views/FoundersView.vue'
import TeamView from '../views/TeamView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router

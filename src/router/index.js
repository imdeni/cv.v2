import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
       path: '/experience',
       name: 'experience',
       component: () => import('../views/ExperienceView.vue')
     },
     {
      path: '/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/Home.vue'
import Contact from '../Components/Contact.vue'
import Recherche from '../Components/Recherche.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component : Contact,
    },
    {
      path: '/recherche',
      name: 'recherche',
      component : Recherche
    }
  ]
})

export default router

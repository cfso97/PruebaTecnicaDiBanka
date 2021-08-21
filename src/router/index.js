import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tramites from '../views/Tramites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tramites',
    name: 'Tramites',
    component: Tramites
  }
]

const router = new VueRouter({
  routes
})

export default router

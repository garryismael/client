import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FlatRate from '../views/FlatRate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
  path: '/forfaits',
  name: "Forfaits",
  component: FlatRate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

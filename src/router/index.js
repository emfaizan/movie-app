import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:movieid',
    name: 'detail',
    props: true,
    component: () => import('../views/DetailsView.vue')
  },
  {
    path: '/stats',
    name: 'stats',
    props: true,
    component: () => import('../views/StatsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

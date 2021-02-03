import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../pages/index/index.vue'
import Basic from '../pages/basic/basic.vue'

const routes = [
  {
    path: '/',
    redirect: '/index',
    // name: 'Home',
    component: Index
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/basic',
    name: 'Basic',
    component: Basic
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: 'about' */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

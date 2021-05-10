import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import SignInUp from '@/views/SignInUp'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignInUp
    // component: () =>
    //   import(/* webpackChunkName: "sign-in" */ '../views/SignInUp.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignInUp
    // component: () =>
    //   import(/* webpackChunkName: "sign-up" */ '../views/SignInUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

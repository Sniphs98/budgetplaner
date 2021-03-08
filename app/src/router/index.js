import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/home/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/components/pages/detail/Detail')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '@/components/pages/account/Account')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/components/pages/login/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router

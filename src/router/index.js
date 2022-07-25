import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const Main = () => import('@/views/Main')
const Userlist = () => import('@/views/Userlist')
const Roles = () => import('@/views/Roles')
const Rights = () => import('@/views/Rights')
const Goods = () => import('@/views/Goods')
const Classification = () => import('@/views/Classification')
const Categories = () => import('@/views/Categories')
const Orders = () => import('@/views/Orders')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/main',
    children: [
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/userlist', component: Userlist }
        ]
      },
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/roles', component: Roles }
        ]
      },
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/rights', component: Rights }
        ]
      },
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/goods', component: Goods }
        ]
      },
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/classification', component: Classification }
        ]
      },
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/categories', component: Categories }
        ]
      },
      {
        path: '/main',
        component: Main,
        children: [
          { path: '/orders', component: Orders }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

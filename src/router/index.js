import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const Main = () => import('@/views/Main')
const Userlist = () => import('@/views/Userlist')

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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

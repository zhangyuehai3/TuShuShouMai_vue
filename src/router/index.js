import Vue from 'vue'
import VueRouter from 'vue-router'
import"../assets/css/global.css"

const Home =()=>import("../views/home/home.vue")
const Logon = ()=>import("../views/logon/logon.vue")
const Register = ()=> import("../views/register/register.vue")
const Shop = ()=>import('../views/shop/shop.vue')
const Order =()=>import('../views/order/order.vue')
const One =()=>import('../views/one/one.vue')
const Shopping =()=>import('../views/shopping/shopping.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home',name:Home, component: Home },
  { path: '/logon',name:Logon,component:Logon},
  { path: '/register',name:Register,component:Register},
  { path:'/shop',name:Shop,component:Shop},
  {path:'/order',name:Order,component:Order},
  {path:'/one',name:One,component:One},
  {path:'/shopping',name:Shopping,component:Shopping}
]

const router = new VueRouter({
  mode:'history', 
  routes
})

export default router

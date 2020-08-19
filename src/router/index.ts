import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import UserInfo from '../views/UserInfo.vue'
import EditDesc from '../views/EditDesc.vue'
import Article from '../views/Article.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        keepalive:true
      }
    },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/userInfo',
    name:'userInfo',
    component:UserInfo,
    meta:{
      isToken:true
    }
  },
  {
    path:'/editDesc',
    name:'EditDesc',
    component:EditDesc,
    meta:{
      isToken:true
    }
  },
  {
    path:'/article/:id',
    component:Article,
    name:'Article'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if((!localStorage.getItem('token')||!localStorage.getItem('id'))&&to.meta.isToken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})
export default router

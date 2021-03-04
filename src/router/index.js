import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import OneFlat from '../views/OneFlat.vue'
// import PrivetRoute from '../router/routersTEST'
// import isAuth from '../store/modules/userAuth'
import store from '../store/index'
Vue.use(VueRouter)

// console.log(PrivetRoute)
// const routes = () => {
//   if (store.getters.isAuth) {
//     return PrivetRoute.privateRoutes
//   }
//   return PrivetRoute.publicRoutes
// }

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage,
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      hideForAuth: true
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
    meta: {
      hideForAuth: true
    }
  },
  {
    path: '/apartment/:id',
    name: 'apartment',
    component: OneFlat,
    meta: {
      requiresAuth: true
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isUserAuth = store.getters.isAuth

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isUserAuth) {
      next({ name: 'login' })
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isUserAuth) {
      next({ name: 'homepage' })
    }
  }

  next()
})

export default router

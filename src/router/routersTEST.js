import store from '../store/index'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
const isAuth = store.getters.isAuth
console.log(isAuth)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage,
    meta: {
      requiresAuth: true
    }
  },

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
  }
]

const privateRoutes = routes.filter(({ meta }) => isAuth && meta.requiresAuth)
const publicRoutes = routes.filter(({ meta }) => !isAuth && meta.hideForAuth)

export default { publicRoutes, privateRoutes }

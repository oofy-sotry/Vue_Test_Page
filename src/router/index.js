import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Sign from '@/components/Sign'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import RequestForm from '@/components/RequestForm'
import Home from '@/components/Home'
import Store from '@/components/store/Store'
import Dashboard from '@/components/dashboard/Dashboard'
import Register from '@/components/register/Register'
import Login from '@/components/login/Login'

import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import VueAnalytics from 'vue-analytics'
import firebase from 'firebase'
Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.use(VueAnalytics, {
  id: 'UA-111895740-1'
})

let routes = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta : {
        requiresGuest : true
      }
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta : {
        requiresGuest : true
      }
    },
    {
      path: '/requestPastor',
      name: 'request-form',
      component: RequestForm
    },
    {
      path: '/store',
      name: 'store-view',
      component: Store
    },
    {
      path: '/dashboard',
      name : 'dashboard',
      component : Dashboard,
      meta : {
        requiresAuth : true
      }
    }
  ]
});

routes.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path : '/login',
        query : {
          redirect : to.fullPath
        }
      })
    }else{
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      next({
        path : '/dashboard',
        query : {
          redirect : to.fullPath
        }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default routes;

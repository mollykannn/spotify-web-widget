import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vertify from './views/Vertify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vertify',
      name: 'vertify',
      component: Vertify
    }
  ]
})

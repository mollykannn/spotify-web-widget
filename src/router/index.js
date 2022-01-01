import { createRouter, createWebHashHistory } from 'vue-router'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: "/vertify",
    name: "vertify",
    component: () => import('@/views/LoginVertify.vue')
  },
  {
    path: "/details",
    name: "details",
    component: () => import('@/views/WidgetDetails.vue'),
    beforeEnter: (to, from, next) => sessionStorage.getItem('access_token') ? next() : next('/')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/access_token:pathMatch(.*)*',
    redirect: '/vertify'
  }]
})

export default Router
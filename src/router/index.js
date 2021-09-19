import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import RandomUser from '../views/RandomUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/randomUser',
    name: 'RandomUser',
    component: RandomUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

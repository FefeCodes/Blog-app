import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const BlogDetails = () => import('@/pages/BlogDetails.vue')
const NotFound = () => import('@/pages/NotFound.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/post/:id',
    name: 'details',
    component: BlogDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

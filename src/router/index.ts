import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    components: { default: () => import('../pages/index.vue') },
  },
  {
    path: '/home',
    name: 'home',
    components: { default: () => import('../pages/index.vue') },
    children:[
      {
       path: 'search',
       name: 'search',
       components: { default: () => import('../pages/search.vue') },
      }
     ]
  },
  {
    path: '/search/:id',
    name: 'search-with-id',
    components: { default: () => import('../pages/searchWithId.vue') },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'home' },
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes
})
export default router

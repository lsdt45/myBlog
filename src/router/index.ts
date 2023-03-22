import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/main',
    children: [{
      path: '/main',
      name: 'NewArticalList',
      component: () => import('../components/pages/NewArticalList.vue')
    },
    {
      path: '/articleList/:category',
      name: 'articleList',
      component: () => import('../views/ArticleList.vue')
    },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/Header.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../components/pages/ArticleContent.vue')
  },
  // {
  //   path: '/articleList/:category',
  //   name: 'articleList',
  //   component: ()=> import('../views/ArticleList.vue')
  // },
  {
    path: '/articleList/label/:label',
    name: 'articleListLabel',
    component: () => import('../views/ArticleList.vue')
  },
  {
    path: '/articleList/search/:keyword',
    name: 'articleList_search',
    component: () => import('../views/ArticleList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

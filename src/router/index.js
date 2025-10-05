import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/SignupPage.vue'
import TopicSelectionPage from '../pages/TopicSelectionPage.vue'
import Topics from '../pages/Topics.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },

  {
  path: '/policies',
  name: 'Policies',
  component: () => import('@/components/Policies.vue')
},

  {
    path: '/topics',
    component: TopicSelectionPage,
    meta: { requiresAuth: false }
  },

  {
    path: '/topic',
    component: Topics,
    meta: { requiresAuth: false}
  },
  {
    path: '/play/:topicId',
    name: 'PlayTopic',
    component: () => import('@/components/QuestionCarousel.vue'),
    props: true,
    meta: { requiresAuth: false }
  },

  {
    path: '/competition/:topicId',
    name: 'Competition',
    component: () => import('@/components/Competition.vue'),
    props: true,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Route guard to protect pages
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router

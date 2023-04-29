import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      isAuthenticated: false
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      isAuthenticated: false
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/secured',
    name: 'secured',
    meta: {
      isAuthenticated: true
    },
    component: () => import('../views/ProtectedView.vue')
  }
]

export default routes

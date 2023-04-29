import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// import KeyCloakService from '../security/KeycloakService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuthenticated) {
//     // Get the actual url of the app, it's needed for Keycloak
//     const basePath = window.location.toString()
//     if (!KeyCloakService.authenticated) {
//       // The page is protected and the user is not authenticated. Force a login.
//       KeyCloakService.CallLogin({ redirectUri: basePath.slice(0, -1) + to.path })
//     } else if (KeyCloakService.hasResourceRole('admin')) {
//       // The user was authenticated, and has the app role
//       Vue.$keycloak
//         .updateToken(70)
//         .then(() => {
//           next()
//         })
//         .catch((err) => {
//           console.error(err)
//         })
//     } else {
//       // The user was authenticated, but did not have the correct role
//       // Redirect to an error page
//       next({ name: 'Unauthorized' })
//     }
//   } else {
//     // This page did not require authentication
//     next()
//   }
// })

export default router

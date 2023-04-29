import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import KeyCloakService from './security/KeycloakService'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const renderApp = () => {
  app.mount('#app')
}

//KeyCloakService.Init(renderApp)
KeyCloakService.CallLogin(renderApp)

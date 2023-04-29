import Keycloak from 'keycloak-js'

const keycloakInstance = new Keycloak()

const Login = (onAuthenticatedCallback) => {
  keycloakInstance
    .init({ onLoad: 'login-required' })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert('non authenticated')
    })
    .catch((e) => {
      console.dir(e)
      console.log('keycloak init exception:', e)
    })
}

const KeyCloakService = {
  CallLogin: Login
}

export default KeyCloakService

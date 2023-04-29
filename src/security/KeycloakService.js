import Keycloak from 'keycloak-js'

const keycloakInstance = new Keycloak()

const login = (onAuthenticatedCallback) => {
  keycloakInstance
    .init({ onLoad: 'login-required' })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert('non authenticated')
      console.log('Keycloak', keycloakInstance)
    })
    .catch((e) => {
      console.dir(e)
      console.log('keycloak init exception:', e)
    })
}

const init = (callback) => {
  keycloakInstance
    .init({ checkLoginIframe: false })
    .then(function () {
      callback()
    })
    .catch((e) => {
      console.dir(e)
      console.log('keycloak init exception:', e)
    })
}

const userName = () => keycloakInstance?.tokenParsed?.preferred_username
const email = () => keycloakInstance?.tokenParsed?.email

const token = () => keycloakInstance?.token

const logOut = () => {
  keycloakInstance.logout()
  console.log('Keycloak logged out')
}

const userRoles = () => {
  if (keycloakInstance.resourceAccess === undefined) return undefined
  return keycloakInstance.resourceAccess['vuejs'].roles
}

const authenticated = () => keycloakInstance.authenticated

const KeyCloakService = {
  CallLogin: login,
  GetUserName: userName,
  GetAccesToken: token,
  CallLogOut: logOut,
  GetUserEmail: email,
  GetUserRoles: userRoles,
  Init: init,
  Authenticated: authenticated
}

export default KeyCloakService

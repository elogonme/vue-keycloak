<template>
  <div class="login">
    <h2>Logged in User: {{ loggedInUser() }}</h2>
    <h2>Email: {{ email() }}</h2>
    <h2>Roles: {{ userRoles()?.join(' ') }}</h2>
    <p>Access Token: {{ accessToken() }}</p>
    <button @click="logOut">Log Out</button>
  </div>
</template>

<script setup>
import KeyCloakService from '../security/KeycloakService'

const loggedInUser = () => KeyCloakService.GetUserName()
const email = () => KeyCloakService.GetUserEmail()
const accessToken = () => KeyCloakService.GetAccesToken()
const logOut = () => KeyCloakService.CallLogOut()
const userRoles = () => KeyCloakService.GetUserRoles()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login {
  margin: auto;
  text-align: center;
}
</style>

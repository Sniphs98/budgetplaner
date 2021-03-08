<template>
  <header class="header">
    <b-navbar toggleable="lg" type="ligth" variant="light">
      <div class="container">
        <b-navbar-nav>
          <router-link :to="{ name: 'Home' }">
            Home
          </router-link>
        </b-navbar-nav>

        <router-link v-if="!loginService.isLoggedIn()" :to="{ name: 'Login' }">
          <b-btn variant="outline-secondary">Sign up</b-btn>
        </router-link>

        <router-link v-else :to="{ name: 'Account' }">
          <b-btn variant="primary">Account</b-btn>
        </router-link>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import LoginService from "@/service/login.service";

export default {
  name: "TheHeader",

  computed: {
    loginService() {
      return new LoginService();
    }
  },
}
</script>

<style scoped>
.header {
  margin-bottom: 48px;
}
</style>

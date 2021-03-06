<template>
  <header class="header">
    <b-navbar toggleable="lg" type="ligth" variant="light">
      <div class="container">
        <b-navbar-nav>
          <router-link :to="{ name: 'Home' }">
            Home
          </router-link>
        </b-navbar-nav>

        <router-link :to="{ name: 'Login' }" class="btn btn-primary">Sign up</router-link>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
.header {
  margin-bottom: 48px;
}
</style>

<template>
  <header class="header">
    <b-navbar toggleable="lg" type="ligth" variant="light">
      <div class="container">
        <b-navbar-nav>
          <router-link :to="{ name: 'Home' }">
            Home
          </router-link>
        </b-navbar-nav>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <b-icon icon="person-circle" class="mr-2"></b-icon>
              </template>
              <b-dropdown-item href="#">Login</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
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

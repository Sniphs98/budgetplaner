<template>
  <header class="header">
      <div class="container">
        <ul class="nav">
            <li v-for="(route, index) in routes"
                :key="`route-${index}`"
                class="nav__item">
                <router-link class="nav__link" :to="{ name: route.name }">
                    {{ route.text }}
                </router-link>
            </li>
        </ul>
      </div>
  </header>
</template>

<script>
export default {
    name: "Header",
    
    data() {
        return {
            routes: [
                {
                    name: 'index',
                    text: 'Home'
                },
                {
                    name: 'create',
                    text: 'Create Project'
                },
                {
                    name: 'user.create',
                    text: 'Create User'
                }
            ]
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: var(--grey-100);
}

.nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.nav__item {
    list-style-type: none;
}

.nav__link {
    text-decoration: none;
    color: var(--grey-800);
    padding: 4px 8px;
}
</style>
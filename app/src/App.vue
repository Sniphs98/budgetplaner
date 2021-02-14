<template>
  <Header class="app__header" />
  
  <router-view></router-view>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: "App",
  
  components: {
    Header
  }
};
</script>

<style scoped>
.app__header {
  margin-bottom: 48px;
}
</style>

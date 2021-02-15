<template>
  <Header class="app__header" />
  
  <router-view></router-view>
  
  <NotificationCenter />
</template>

<script>
import NotificationCenter from './components/NotificationCenter.vue';
import Header from './components/layout/Header.vue';

export default {
  name: "App",
  
  components: {
    Header,
    NotificationCenter
  }
};
</script>

<style scoped>
.app__header {
  margin-bottom: 48px;
}
</style>

<template>
  <div id="app">
    <TheHeader></TheHeader>

    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader';

export default {
  name: 'App',

  components: {
    TheHeader
  }
}
</script>

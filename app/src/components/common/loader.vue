<template>
  <div class="loader-wrapper">
    <div class="loader-backdrop"></div>
    <div class="loader-spinner">
      <b-spinner variant="primary"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader"
}
</script>

<style scoped>
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.loader-backdrop {
  width: 100vw;
  height: 100vh;
  background: white;
  opacity: 0.3;
}

.loader-spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

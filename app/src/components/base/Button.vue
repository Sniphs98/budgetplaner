<template>
  <button>
      <slot name="default">
      </slot>
  </button>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style scoped>
button {
    background-color: var(--grey-800);
    color: var(--grey-100);
    border: 0 none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: var(--grey-900);
}
</style>
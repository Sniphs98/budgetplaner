<template>
  <button :disabled="disabled">
      <slot name="default">
      </slot>
  </button>
</template>

<script>
export default {
    name: "Button",
    
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
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
    height: 42px;
}

button:hover {
    background-color: var(--grey-900);
}

button:disabled {
    background-color: var(--grey-500);
    cursor: not-allowed;
}
</style>
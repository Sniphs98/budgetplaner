<template>
    <div>
        <label for="">Label</label>
        <slot name="field"></slot>
    </div>
</template>

<script>
export default {
    name: "Base Field"
}
</script>

<style scoped>
label {
    display: block;
}
</style>
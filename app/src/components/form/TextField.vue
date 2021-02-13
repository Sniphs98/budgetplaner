<template>
  <BaseField>
    <template #field>
        <input type="text">
    </template>
  </BaseField>
</template>

<script>
import BaseField from './BaseField.vue';

export default {
    name: "Text Field",
    
    components: {
        BaseField
    }
}
</script>

<style>
    
</style>
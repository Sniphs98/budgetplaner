<template>
  <BaseField>
    <template #field>
        <input type="text"
          :value="modelValue"
          @input="onInput"
          :placeholder="placeholder">
    </template>
  </BaseField>
</template>

<script>
import BaseField from './BaseField.vue';

export default {
    name: "Text Field",
    
    components: {
        BaseField
    },
    
    props: {
      modelValue: {
        type: String,
        required: true
      },
      
      placeholder: {
        type: String,
        required: false,
        default: ''
      }
    },
    
    methods: {
      onInput(event) {
        const value = event.target.value;

        this.$emit('update:modelValue', value);
      }
    }
}
</script>

<style>
    
</style>
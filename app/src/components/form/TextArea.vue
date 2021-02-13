<template>
  <BaseField>
    <template #field>
        <textarea :value="modelValue"
            :placeholder="placeholder"
            @input="onInput"
            cols="30"
            rows="10">
        </textarea>
    </template>
  </BaseField>
</template>

<script>
import BaseField from './BaseField.vue';

export default {
    name: "Text Area",
    
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
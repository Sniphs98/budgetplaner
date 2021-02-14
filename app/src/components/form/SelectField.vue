<template>
  <BaseField>
    <template #field>
        <select :value="modelValue" @change="onChange">
            <option value="">Select an option</option>
            
            <option v-for="(option, index) in options"
                :key="`option-${index}`"
                :value="option[valueProperty]">
                {{ option[textProperty] }}
            </option>
        </select>
    </template>
  </BaseField>
</template>

<script>
import BaseField from './BaseField.vue';

export default {
    name: 'Select Field',
    
    components: {
        BaseField
    },
    
    props: {
        modelValue: {
            type: String,
            required: true
        },
        
        options: {
            type: Array,
            required: true
        },
        
        textProperty: {
            type: String,
            required: false,
            default: 'text'
        },
        
        valueProperty: {
            type: String,
            required: false,
            default: 'value'
        }
    },
    
    methods: {
        onChange(event) {
            const value = event.target.value;
            
            this.$emit('update:modelValue', value);
        }
    }
}
</script>

<style>

</style>
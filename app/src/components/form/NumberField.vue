<template>
  <BaseField>
    <template #field>
        <input type="number"
            :value="modelValue"
            @input="onInput"
            @blur="fitValueIntoRange"
            :placeholder="placeholder"
            :min="min"
            :max="max">
    </template>
  </BaseField>
</template>

<script>
import BaseField from './BaseField.vue';

export default {
    name: "Number Field",

    components: {
        BaseField
    },

    props: {
        modelValue: {
            type: Number,
            required: true,
        },
        
        placeholder: {
            type: String,
            required: false,
            default: ''
        },

        min: {
            type: Number,
            required: false,
            default: null
        },

        max: {
            type: Number,
            required: false,
            default: null
        }
    },
    
    methods: {
        onInput(event) {
            const value = Number(event.target.value);
            
            this.$emit('update:modelValue', value);
        },
        
        fitValueIntoRange(event) {
            const value = Number(event.target.value);
            
            if (value > this.max) {
                this.$emit('update:modelValue', this.max);
            } else if (value < this.min) {
                this.$emit('update:modelValue', this.min);
            }
        }
    }
}
</script>

<style>

</style>
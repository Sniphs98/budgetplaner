<template>
    <div class="base-field">
        <label v-if="label" 
            class="base-field__label"
            for="">
            {{ label }}
        </label>
        
        <slot name="field"></slot>
    </div>
</template>

<script>
export default {
    name: "Base Field",
    
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>

<style scoped>
input {
    border: 2px solid var(--grey-300);
    background-color: var(--grey-100);
    color: var(--grey-800);
    border-radius: 4px;
    height: 42px;
    width: 100%;
    padding: 4px;
}

input::placeholder {
    color: var(--grey-400);
}

.base-field {
    margin-bottom: 24px;
}

.base-field__label {
    display: block;
    font-size: var(--text-sm);
}
</style>
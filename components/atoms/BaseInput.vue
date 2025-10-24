<template>
  <input 
    :type="type" 
    :value="modelValue" 
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
    :placeholder="placeholder"
    class="base-input"
  />
</template>

<script setup lang="ts">
// TypeScript ile v-model prop ve event tanımları
interface Props {
  modelValue: string | number; 
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: ''
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.base-input {
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.base-input:focus {
  border-color: #f38220;
  outline: none;
}
</style> 
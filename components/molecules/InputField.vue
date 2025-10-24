<template>
  <div class="input-field-container">
    <label v-if="label" class="input-label">{{ label }}</label>
    <BaseInput
      :type="type"
      :placeholder="placeholder"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :class="{ 'input-error': error }"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/atoms/BaseInput.vue'; 

interface Props {
  label?: string; 
  type?: 'text' | 'password' | 'email' | 'number'; 
  placeholder?: string;
  modelValue: string | number; 
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: ''
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-field-container {
  margin-bottom: 15px;
  width: 100%;
}
.input-label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
}
.error-message {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #e30000;
}
.input-error {
  border-color: #e30000 !important;
}
</style>
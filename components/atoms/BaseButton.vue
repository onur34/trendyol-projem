<template>
  <button 
    :disabled="disabled" 
    @click="$emit('click')"
    :class="[variant]"
    class="base-button"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
// TypeScript ile butonun farklı stillerini ve pasiflik durumunu yönetiyoruz
interface Props {
  disabled?: boolean;
  // Görseldeki buton türlerine uygun varyantlar
  variant?: 'primary' | 'secondary' | 'facebook' | 'google'; 
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  variant: 'primary' 
});

defineEmits(['click']);
</script>

<style scoped>
.base-button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
  width: 100%;
}

/* Birincil (GİRİŞ YAP) Stili */
.base-button.primary {
  background-color: #ff6000; /* Koyu Turuncu */
  color: white;
  height: 50px;
  font-size: 16px;
}
/* Facebook Stili */
.base-button.facebook {
  background-color: #4267B2;
  color: white;
  border: 1px solid #4267B2;
  height: 50px;
}
/* Google Stili */
.base-button.google {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ddd;
  height: 50px;
}

.base-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>  
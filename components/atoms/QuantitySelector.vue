<template>
  <div class="quantity-selector">
    <button @click="decrement" :disabled="quantity === 1" class="qty-button">-</button>
    
    <input 
      type="number" 
      :value="quantity" 
      @input="handleInput" 
      class="qty-input" 
      min="1" 
    />
    
    <button @click="increment" class="qty-button">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  // Vue 3'te iki yönlü veri bağlama (v-model) için kullanılır
  modelValue: number; 
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

// Local state (Yerel durum)
const quantity = ref(props.modelValue);

// Dışarıdan (parent'tan) gelen modelValue değişirse local state'i günceller
watch(() => props.modelValue, (newVal) => {
  quantity.value = newVal;
});

// Artırma ve Azaltma Fonksiyonları
const increment = () => {
  quantity.value++;
  emit('update:modelValue', quantity.value); // Parent'a bildir
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
    emit('update:modelValue', quantity.value); // Parent'a bildir
  }
};

// Input alanından direkt giriş yapılırsa
const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);
    if (!isNaN(value) && value >= 1) {
        quantity.value = value;
        emit('update:modelValue', quantity.value);
    }
}
</script>

<style scoped>
.quantity-selector {
  display: inline-flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
}
.qty-button {
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  color: #ff6000; /* Turuncu renk */
  transition: background-color 0.1s;
}
.qty-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}
.qty-input {
  width: 40px;
  height: 30px;
  border: none;
  text-align: center;
  font-size: 14px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
}
.qty-input:focus {
    outline: none;
}
/* Tarayıcının varsayılan oklarını gizleme */
.qty-input::-webkit-outer-spin-button,
.qty-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style> 
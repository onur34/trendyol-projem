<template>
  <label class="base-radio-label">
    <input 
      type="radio" 
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      :name="name"
      class="radio-input"
    />
    <span class="radio-custom"></span>
    <span class="radio-text"><slot></slot></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string; // Seçili değer
  value: string;      // Bu radyonun değeri
  name: string;       // Aynı grup ismine sahip olmalı (Zorunlu)
}
defineProps<Props>();
defineEmits(['update:modelValue']);
</script>

<style scoped>
/* Burada sadece radio'yu gizleyip, GenderSelector'da stilleyeceğiz. */
.base-radio-label {
    display: block;
    cursor: pointer;
    font-size: 14px;
}
.radio-input {
    /* Sadece fonksiyonellik için kullanılır, görünmez yapılır */
    opacity: 0;
    position: absolute;
}
.radio-text {
    /* Metin alanı */
    display: block;
    text-align: center;
    padding: 12px 15px;
}
</style> 
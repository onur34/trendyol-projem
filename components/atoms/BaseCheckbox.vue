<template>
  <label class="base-checkbox-label">
    <input 
      type="checkbox" 
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      class="checkbox-input"
    />
    <span class="checkbox-box"></span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean; // v-model ile checkbox'ın durumu
}
defineProps<Props>();
defineEmits(['update:modelValue']);
</script>

<style scoped>
/* Basit Checkbox stili (Görsele uygun, modern kutu görünümü) */
.base-checkbox-label {
  display: flex;
  align-items: flex-start; /* Metin uzunsa üstten hizala */
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
}
.checkbox-input {
    /* Varsayılan input'u gizle */
    opacity: 0;
    width: 0;
    height: 0;
}

/* Özel kutu oluşturma */
.checkbox-box {
    display: inline-block;
    width: 18px;
    min-width: 18px; /* Sabit boyut */
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    transition: all 0.2s;
    position: relative;
    top: 2px;
}

/* Seçili olduğunda stil */
.checkbox-input:checked + .checkbox-box {
    background-color: #ff6000; /* Trendyol rengi */
    border-color: #ff6000;
}

/* Onay işaretini (tik) ekleme */
.checkbox-input:checked + .checkbox-box::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}
</style> 
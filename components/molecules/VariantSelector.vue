<template>
  <div class="variant-selector">
    
    <div class="variant-group">
      <p class="variant-label">Renk: <span class="selected-value">{{ selectedColor }}</span></p>
      <div class="options-wrapper color-options">
        <div 
          v-for="color in colors" 
          :key="color.value"
          :class="['option-item color-item', { 'selected': selectedColor === color.value }]"
          :style="{ 'border-color': selectedColor === color.value ? '#ff6000' : '#ddd' }"
          @click="selectedColor = color.value"
        >
          <div :style="{ 'background-color': color.hex }" class="color-swatch"></div>
        </div>
      </div>
    </div>

    <div class="variant-group">
      <p class="variant-label">Dahili Hafıza: <span class="selected-value">{{ selectedStorage }}</span></p>
      <div class="options-wrapper storage-options">
        <div 
          v-for="storage in storages" 
          :key="storage"
          :class="['option-item storage-item', { 'selected': selectedStorage === storage }]"
          @click="selectedStorage = storage"
        >
          {{ storage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Örnek veriler ve tipler
interface ColorOption {
    value: string;
    hex: string;
}

const colors: ColorOption[] = [
    { value: 'Kozmik Turuncu', hex: '#ff7f50' },
    { value: 'Gece Mavisi', hex: '#191970' },
    { value: 'Gümüş Beyaz', hex: '#e0e0e0' },
];
const storages: string[] = ['1 TB', '512 GB', '256 GB', '2 TB'];

// Seçili durum (TypeScript ile)
const selectedColor = ref<string>('Kozmik Turuncu');
const selectedStorage = ref<string>('256 GB');
</script>

<style scoped>
.variant-selector {
  margin: 25px 0;
}
.variant-group {
  margin-bottom: 20px;
}
.variant-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}
.selected-value {
    font-weight: 400;
    color: #ff6000;
    margin-left: 5px;
}
.options-wrapper {
  display: flex;
  gap: 10px;
}
/* Renk Seçimi Stilleri */
.color-item {
    border: 2px solid #ddd;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
}
.color-swatch {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}
/* Hafıza Seçimi Stilleri */
.storage-item {
  border: 1px solid #ddd;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s;
}
.storage-item.selected {
  border-color: #ff6000;
  font-weight: 600;
  background-color: #fff0e5; /* Hafif turuncu arka plan */
}
</style> 
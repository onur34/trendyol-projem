<template>
  <div class="gender-selector-container">
    <p class="selector-title">Sana özel ürünler sunabilmemiz için ilgilendiğin ürün grubunu seçer misin?</p>
    
    <div class="radio-buttons-wrapper">
      
      <BaseRadio 
        name="gender" 
        value="Kadin" 
        v-model="selectedGender"
        class="gender-option"
      >
        Kadın
      </BaseRadio>

      <BaseRadio 
        name="gender" 
        value="Erkek" 
        v-model="selectedGender"
        class="gender-option"
      >
        Erkek
      </BaseRadio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseRadio from '@/components/atoms/BaseRadio.vue';

// 1. Emit fonksiyonunu defineEmits ile tanımlayın
const emit = defineEmits(['update:modelValue']);

// Dışarıdan modelValue olarak değeri alıp, dışarıya aktarır
const selectedGender = ref<string>('');

// 2. watch içindeki emit fonksiyonunu kullanarak dışarıya haber verin
watch(selectedGender, (newValue) => {
    // Şimdi 'emit' fonksiyonu doğru şekilde çağrılıyor
    emit('update:modelValue', newValue);
});
</script>

<style scoped>
/* STİL KISMINI DEĞİŞTİRMEYİN */
.gender-selector-container {
    margin: 20px 0;
    padding: 15px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.selector-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #333;
}
.radio-buttons-wrapper {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
}
.gender-option {
    flex: 1;
    transition: all 0.2s;
}
.gender-option .radio-text {
    padding: 12px;
    background-color: white;
    font-weight: 500;
    border-right: 1px solid #ddd;
}
.gender-option:last-child .radio-text {
    border-right: none;
}
.gender-option .radio-input:checked ~ .radio-custom + .radio-text {
    background-color: #ff6000;
    color: white;
    border-color: #ff6000;
}
</style> 
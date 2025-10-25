<template>
  <div :class="['product-badge', variant]">
    <img v-if="variant === 'hizli'" src="/slider/hizli.jpeg" alt="Hızlı Teslimat İkonu" class="badge-icon" />
    <img v-else-if="variant === 'kargo'" src="/slider/kargo.png" alt="Kargo İkonu" class="badge-icon" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// TypeScript ile rozet tiplerini tanımlıyoruz
interface Props {
  variant: 'hizli' | 'avantajli' | 'kargo' | 'stok' | 'taksit'; 
}
defineProps<Props>();
</script>

<style scoped>
.product-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
}
.badge-icon {
    width: 12px;
    height: 12px;
}
/* *** VARYANT STİLLERİ *** */
.product-badge.hizli {
  background-color: #00a86b; /* Yeşil tonu */
  color: white;
}
.product-badge.kargo {
  background-color: #333; /* Koyu gri/siyah */
  color: white;
}
.product-badge.avantajli {
  background-color: #ff6600; /* Turuncu tonu */
  color: white;
}
.product-badge.stok {
  background-color: #f00; 
  color: white;
}
.product-badge.taksit {
    background-color: #e6e6fa; 
    color: #4b0082;
}
</style> 
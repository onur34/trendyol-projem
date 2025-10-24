<template>
  <div class="tab-selector">
    <div 
      :class="['tab-item', { 'active': activeTab === 'login' }]" 
      @click="$emit('update:activeTab', 'login')"
    >
      Giriş Yap
    </div>
    <div 
      :class="['tab-item', { 'active': activeTab === 'register' }]" 
      @click="$emit('update:activeTab', 'register')"
    >
      Üye Ol
    </div>
  </div>
</template>

<script setup lang="ts">
// TypeScript ile sadece 'login' veya 'register' değerlerini kabul ediyoruz
interface Props {
  activeTab: 'login' | 'register'; 
}

defineProps<Props>();
defineEmits(['update:activeTab']);
</script>

<style scoped>
.tab-selector {
  display: flex;
  margin-bottom: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden; /* Kenarları yuvarlak tutmak için */
}
.tab-item {
  flex: 1;
  text-align: center;
  padding: 15px 0;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  background-color: #f9f9f9;
  font-size: 15px;
}
.tab-item:first-child {
  border-right: 1px solid #ddd;
}
/* Görseldeki gibi aktif sekme stili */
.tab-item.active {
  background-color: white;
  color: #333; /* Aktifken siyah/koyu gri */
}
</style> 
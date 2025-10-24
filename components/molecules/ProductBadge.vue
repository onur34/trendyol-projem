<template>
  <div :class="['product-badge', type]">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
// PROP KURALI: Dışarıdan metin ve renk tipi bekleniyor.
interface Props {
  text: string;
  type: 'green' | 'red' | 'purple' | 'orange' | 'yellow'; // Mor (purple) eklendi
}
const props = defineProps<Props>();
</script>

<style scoped>
.product-badge {
    padding: 3px 6px;
    font-size: 11px;
    font-weight: 600;
    color: white; /* Varsayılan metin rengi */
    border-radius: 4px;
    white-space: nowrap; 
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
}

/* Renk Stilleri (GÖRSELE UYGUN KESİN RENKLER) */
.product-badge.purple {
    /* Görseldeki mor/lila rengi */
    background-color: #f0e6ff; /* Çok açık mor zemin */
    color: #8a2be2; /* Koyu mor metin */
    border: 1px solid #dcd0f0; /* Mor kenarlık */
}
.product-badge.green {
    background-color: #008060; /* Yeşil zemin */
    color: white;
}
.product-badge.red {
    background-color: #e30000; /* Kırmızı zemin */
    color: white;
}
/* Diğer renkler (yellow, orange) burada tanımlıdır. */
</style> 
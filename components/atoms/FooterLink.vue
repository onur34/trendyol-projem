<template>
  <a href="#" class="footer-link">{{ text }}</a>
</template>

<script setup lang="ts">
// PROP KURALI: Dışarıdan gelen 'text' (metin) verisini bekliyoruz.
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
/* Sadece temel stil */
.footer-link { 
    display: block; 
    color: #555; 
    font-size: 13px;
    margin-bottom: 8px;
    text-decoration: none;
    text-align: left;
}
</style> 
<template>
  <div class="link-group">
    <h4 class="group-title">{{ title }}</h4>
    
    <AtomsFooterLink v-for="link in links" :key="link" :text="link" />
  </div>
</template>

<script setup lang="ts">
// PROP KURALI: Dışarıdan başlık ve bağlantı listesi bekleniyor.
interface Props {
  title: string;
  links: string[];
}
const props = defineProps<Props>();
</script>

<style scoped>
.link-group {
    text-align: left;
    min-width: 150px;
    margin-right: 20px;
}
.group-title {
    font-size: 14px;
    font-weight: 600;
    color: #333; 
    margin-bottom: 10px;
}
</style> 
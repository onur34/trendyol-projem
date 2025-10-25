<template>
  <div class="image-card-container">
    <img :src="imageSrc" :alt="altText" class="product-image" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string; 
  altText: string;
}
defineProps<Props>();
</script>

<style scoped>

.image-card-container {
  width: 100%;
  height: 100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px; /* Önemli: padding'i azalttık */
  background-color: #f8c9c7; 
  border-radius: 8px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.product-image {
  width: 100%; /* Görselin kapsayıcısını (image-card-container) tam doldurmasını sağlar */
  height: 100%; /* Görselin kapsayıcısını (image-card-container) tam doldurmasını sağlar */
  object-fit: cover; /* Görselin oranlarını koruyarak sığdırır */
  /* Eğer yine boşluk kalırsa ve görsellerin kenarlarından kesilmesi sorun değilse 'cover' kullanın: */
  /* object-fit: cover; */ 
}
</style>
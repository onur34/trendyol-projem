<template>
  <div class="rating-container">
    <span class="stars">★★★★★</span> <span class="review-count">({{ reviewCount }})</span>
  </div>
</template>

<script setup lang="ts">
// PROP KURALI: Yorum sayısını dışarıdan alıyoruz.
interface Props {
  reviewCount: number;
}
const props = defineProps<Props>();
</script>

<style scoped>
.rating-container {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #ffc107; /* Sarı yıldız rengi */
}
.review-count {
    color: #999;
    margin-left: 5px;
}
</style>

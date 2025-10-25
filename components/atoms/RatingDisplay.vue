<template>
  <div class="rating-display">
    <span class="rating-score">{{ score.toFixed(1) }}</span>
    
    <div class="star-wrapper">
      <img 
        v-for="n in 5" 
        :key="n" 
        src="/urun/star.jpeg" 
        alt="Yıldız" 
        class="star-icon"
      />
    </div>
    
    <span class="review-count">({{ reviewCount }} Değerlendirme)</span>
    
    <span class="separator">·</span>
    <img src="/urun/kamera.jpg" alt="Kamera" class="camera-icon"/>
    <span class="qa-count">{{ qaCount }} Soru-Cevap</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  score: number;
  reviewCount: number;
  qaCount: number;
}
defineProps<Props>();
</script>

<style scoped>
.rating-display {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}
.rating-score {
  font-weight: 700;
  color: #ff6000;
}
.star-icon {
  width: 14px;
  height: 14px;
  margin-right: 1px;
}
.camera-icon {
    width: 14px;
    height: 14px;
    opacity: 0.7;
}
.review-count {
  color: #888;
  font-weight: 600;
}
.qa-count {
    color: #444; 
}
.separator {
  color: #ccc;
}
</style> 
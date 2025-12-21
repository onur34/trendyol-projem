<template>
  <div class="action-buttons">
    
    <BaseButton variant="secondary" class="buy-now-button">
      Şimdi Al
    </BaseButton>

    <BaseButton 
      variant="primary" 
      class="add-to-cart-button" 
      @click="emit('addToCart')"
    >
      <img src="/urun/sepet.jpg" alt="Sepet" class="button-icon" />
      Sepete Ekle
      <span class="stock-badge">Son 3 Ürün</span>
    </BaseButton>
    
    <button class="favorite-button" @click="emit('toggleFavorite')">
      <img src="/urun/kalp.jpeg" alt="Favori" class="heart-icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue';

// Buradaki 'addToCart' ifadesi, ProductDetail.vue dosyasındaki @add-to-cart ile haberleşir
const emit = defineEmits(['toggleFavorite', 'addToCart']);
</script>

<style scoped>
.action-buttons {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
}
.buy-now-button, .add-to-cart-button {
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    flex: 1;
    border-radius: 6px;
}
.buy-now-button {
    background-color: white;
    color: #ff6000;
    border: 1px solid #ff6000;
}
.add-to-cart-button {
    background-color: #ff6000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-right: 50px;
    cursor: pointer;
}
.button-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.stock-badge {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 400;
}
.favorite-button {
    background: none;
    border: 1px solid #ddd;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}
.favorite-button:hover {
    background-color: #f0f0f0;
}
.heart-icon {
    width: 24px;
    height: 24px;
}
</style>
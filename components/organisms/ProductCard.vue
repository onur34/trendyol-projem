<template>
  <div class="product-card">
    
    <div class="badge-area">
      <ProductBadge v-if="product.isFastDelivery" variant="hizli">
        Hızlı Teslimat
      </ProductBadge>
      <ProductBadge v-if="product.isFreeShipping" variant="kargo">
        Kargo Bedava
      </ProductBadge>
      <ProductBadge v-if="product.isAdvantageous" variant="avantajli">
        Avantajlı Ürün
      </ProductBadge>
      <ProductBadge v-if="product.isStockAlert" variant="stok" :stockText="product.stockText">
        {{ product.stockText }}
      </ProductBadge>
      <ProductBadge v-if="product.isInstallment" variant="taksit">
        PEŞİN FİYATINA 3 TAKSİT
      </ProductBadge>
    </div>
    
    <div class="image-wrapper">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>

    <div class="info-wrapper">
      <p class="product-brand">{{ product.brand }}</p>
      <p class="product-name">{{ product.name }}</p>
      
      <div class="rating-wrapper">
        <span class="rating-score">{{ product.score.toFixed(1) }}</span>
        <div class="stars">
            <span v-for="n in 5" :key="n" class="star">★</span> 
        </div>
        <span class="review-count">({{ product.reviewCount }})</span>
      </div>

      <div class="price-area">
        <p class="current-price">{{ product.price.toFixed(2).replace('.', ',') }} TL</p>
        <p v-if="product.discountText" class="discount-text">{{ product.discountText }}</p>
      </div>

      <div class="action-area">
        <span class="size-text">Tek Beden</span>
        <button class="add-to-cart-btn">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductBadge from '@/components/atoms/ProductBadge.vue';

// TypeScript ile gelen ürün verisinin tam yapısı
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  score: number;
  reviewCount: number;
  imageUrl: string;
  isFastDelivery: boolean;
  isAdvantageous?: boolean;
  isFreeShipping?: boolean;
  isStockAlert?: boolean; 
  stockText?: string;    
  isInstallment?: boolean; 
  discountText?: string; 
}

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<style scoped>
.product-card {
  width: 250px;
  min-height: 400px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  position: relative;
  font-family: Arial, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* ROZET ALANI */
.badge-area {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* GÖRSEL ALANI */
.image-wrapper {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
}
.product-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

/* BİLGİ ALANI */
.info-wrapper {
  padding: 10px 15px 15px;
}
.product-brand {
    font-size: 13px;
    color: #999;
    font-weight: 600;
    margin-bottom: 3px;
}
.product-name {
    font-size: 14px;
    height: 35px;
    overflow: hidden;
    color: #333;
}

/* PUANLAMA */
.rating-wrapper {
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 5px;
    font-size: 12px;
}
.rating-score {
    font-weight: 700;
    color: #ff6000;
    margin-right: 5px;
}
.stars {
    color: #ffc107; /* Sarı yıldız rengi */
}
.star {
    margin-right: 2px;
}
.review-count {
    color: #999;
    margin-left: 5px;
}

/* FİYAT */
.price-area {
    margin-top: 10px;
}
.current-price {
    font-size: 16px;
    font-weight: 700;
    color: #333;
}
.discount-text {
    font-size: 12px;
    color: #ff6000;
    margin-top: 5px;
}

/* AKSİYON ALANI */
.action-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}
.size-text {
    font-size: 12px;
    color: #666;
}
.add-to-cart-btn {
    background-color: #ff6000;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}
.add-to-cart-btn:hover {
    background-color: #e55600;
}
</style> 
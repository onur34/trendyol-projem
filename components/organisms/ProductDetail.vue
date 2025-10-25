<template>
  <div class="product-detail-container">
    
    <div class="image-area">
      
      <div class="info-badges">
        <span class="badge badge-kargo">KARGO BEDAVA</span>
        <span class="badge badge-teslimat">HIZLI TESLİMAT</span>
        <span class="badge badge-sigorta">SİGORTAYA UYGUN</span>
      </div>
      
      <div class="product-gallery">
          <button class="arrow-button left-arrow"> < </button>
          <img src="/urun/iphone-17-pro.webp" alt="iPhone 17 Pro Max" class="main-product-image" />
          <button class="arrow-button right-arrow"> > </button>
      </div>
    </div>
    
    <div class="info-area">
      
      <div class="breadcrumb-info">
        <span class="category-path">Anasayfa > Apple > Elektronik > Cep Telefonu > Apple iPhone iOS Cep Telefonları</span>
      </div>
      <h1 class="product-title">Apple iPhone 17 Pro Max 256GB Kozmik Turuncu</h1>
      
      <RatingDisplay :score="5.0" :reviewCount="4" :qaCount="72" />
      
      <p class="stock-info">
        <span class="stock-highlight">1,2B kişinin sepetinde, tükenmeden al!</span>
      </p>

      <p class="price">133.139 TL</p>
      
      <VariantSelector /> 
      
      <ActionButtons @toggle-favorite="console.log('Favorilere Eklendi!')" /> 
      
    </div>
    
  </div>
</template>

<script setup lang="ts">
import RatingDisplay from '@/components/atoms/RatingDisplay.vue'; 
import VariantSelector from '@/components/molecules/VariantSelector.vue'; 
import ActionButtons from '@/components/molecules/ActionButtons.vue'; 
</script>

<style scoped>
/* TÜM CSS ÖNCEKİ GİBİ KALIYOR, SADECE product-gallery ve info-area eklendi/düzenlendi */
.product-detail-container {
  display: flex;
  gap: 30px;
  max-width: 1280px;
  margin: 30px auto;
  padding: 0 20px;
}
/* 1. Görsel Alanı (Sol) */
.image-area {
  width: 40%;
  position: relative;
}
.info-badges {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
}
.badge {
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
}
.badge-kargo { background-color: #333; color: white; }
.badge-teslimat { background-color: #008000; color: white; }
.badge-sigorta { background-color: #007bff; color: white; }

.product-gallery {
    position: relative;
    height: 600px;
    background-color: #f0f0f0; 
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.main-product-image {
    max-width: 100%; 
    max-height: 300%;
    object-fit: contain;
    margin: 0 auto;
    display: block;
}

.arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    z-index: 20;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.left-arrow { left: 10px; }
.right-arrow { right: 10px; }

/* 2. Bilgi Alanı (Sağ) */
.info-area {
  width: 60%;
  padding-top: 20px;
}

.breadcrumb-info {
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
}
.category-path {
    color: #333;
    font-weight: 600;
}
.product-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
}
.stock-info {
    margin: 15px 0;
}
.stock-highlight {
    background-color: #fff3cd; 
    color: #856404;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
}
.price {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin: 20px 0;
}
</style> 
<template>
  <div class="home-page">
    
    <OrganismsTheHeader />

    <OrganismsTheFooter />

    <OrganismsLoginForm />
    
    <main class="main-content">
    </main>
    
    <OrganismsProductDetail />

    <OrganismsShoppingCart />

    <OrganismsPromoSlider />

    <section class="product-list-section">
      <h2 class="section-title">Önerilen Ürünler</h2> 
      
      <div class="product-card-container">
        <OrganismsProductCard 
          v-for="product in productList" 
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <MoleculesAuthActionGroup class="auth-group-position" /> 
    
    <OrganismsCampaignList /> 
    
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <p>Giriş Yap / Kayıt Ol Modal İçeriği</p>
        <button @click="closeModal">Kapat</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// TS Arayüzü: Ürün Verisinin Yeni ve Detaylı Yapısı
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

// MOCK (Test) Verisi
const productList = ref<Product[]>([
  { 
    id: 1, 
    name: "m.tk moveteck iPhone 17 Pro Max Kılıf Tam Kamera Korumal...", 
    brand: "m.tk moveteck", 
    price: 149.90, 
    score: 5.0, 
    reviewCount: 6, 
    imageUrl: "/slider/iphone-3.jpeg",
    isFastDelivery: true,
    isAdvantageous: true,
    isFreeShipping: false,
    discountText: "3 Adet ve Üzeri 50 TL İndirim"
  }, 
  { 
    id: 2, 
    name: "Novatis iPhone 17 Pro Max Uyumlu 3D Kamera Korumalı...", 
    brand: "Novatis", 
    price: 149.90, 
    score: 4.9,
    reviewCount: 11,
    imageUrl: "/slider/iphone-4.webp",
    isFastDelivery: true,
    isAdvantageous: false,
    isFreeShipping: true,
    discountText: "2 Adet ve Üzeri %5 İndirim"
  }, 
  { 
    id: 3, 
    name: "Apple iPhone 17 Pro Max 512GB Kozmik Turuncu", 
    brand: "Apple", 
    price: 164.299, 
    score: 5.0,
    reviewCount: 6,
    imageUrl: "/slider/iphone-1.webp",
    isFastDelivery: false,
    isAdvantageous: false,
    isFreeShipping: true,
    isStockAlert: true,
    stockText: "Son 1 Ürün!",
    isInstallment: true
  },
  { 
    id: 4, 
    name: "UNIQ Better by Design iPhone 17 Pro / iPhone 17 Pro Max Len...", 
    brand: "UNIQ Better by Design", 
    price: 1234.90, 
    score: 4.5,
    reviewCount: 15,
    imageUrl: "/slider/iphone-2.jpeg",
    isFastDelivery: true,
    isFreeShipping: true,
    isInstallment: true,
    stockText: "Tükeniyor!"
  },
]);

// MODAL YÖNETİMİ
const isModalOpen = ref(false);
const closeModal = () => { isModalOpen.value = false; };
</script>

<style scoped>
/* Genel Düzen */
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex-grow: 1; 
  max-width: 1280px;
  margin: 20px auto;
  padding: 0 20px;
  width: 100%;
}

/* Başlık ve Çizgi Stilleri */
.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #f27a1a;
  margin-bottom: 20px;
  display: inline-block; 
  position: relative; 
  padding-bottom: 5px; 
}
.section-title::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: #f27a1a;
  position: absolute;
  bottom: 0;
  left: 0;
}

/* Ürün Kartları Bölümü */
.product-list-section {
    padding-top: 20px;
    max-width: 1280px;
    margin: 0 auto;
}
.product-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: flex-start;
}

/* 9. Öge (AuthActionGroup) Pozisyonu */
.auth-group-position {
  margin: 40px auto;
}

/* Modal Stilleri */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style> 
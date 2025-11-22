<template>
  <div class="control-layout"> 
    
    <aside class="component-list-sidebar">
      <h2>Vize Component Listesi (10/10)</h2>
      
      <button 
        v-for="(item, index) in componentList" 
        :key="index"
        @click="activeComponent = item.name"
        :class="{ 'active-btn': activeComponent === item.name }"
        class="component-toggle-btn"
      >
        {{ item.id }}. {{ item.label }}
      </button>
    </aside>

    <main class="component-display-area">
      <h3 v-if="!activeComponent">Lütfen Sol Taraftan Bir Component Seçin</h3>
      
      <OrganismsTheHeader v-show="activeComponent === 'TheHeader'" class="demo-full-width" />

      <OrganismsTheFooter v-show="activeComponent === 'TheFooter'" class="demo-full-width" />
      
      <div v-show="activeComponent === 'ProductCard'" class="demo-wrapper">
         <OrganismsProductCard :product="mockProduct" />
      </div>

      <OrganismsLoginForm v-show="activeComponent === 'LoginForm'" class="demo-wrapper" />
      
      <div v-show="activeComponent === 'SignUpForm'" class="demo-wrapper">
          <OrganismsLoginForm :currentTab="'register'" />
      </div>

      <OrganismsProductDetail v-show="activeComponent === 'ProductDetail'" class="demo-full-width" />

      <OrganismsShoppingCart v-show="activeComponent === 'ShoppingCart'" class="demo-full-width" />

      <OrganismsPromoSlider v-show="activeComponent === 'PromoSlider'" class="demo-full-width" />
      
      <MoleculesAuthActionGroup v-show="activeComponent === 'AuthActionGroup'" class="demo-wrapper" />
      
      <OrganismsCampaignList v-show="activeComponent === 'CampaignList'" class="demo-full-width" />
      
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// **********************************************
// 1. GÖRSEL YOLLARI VE TS STATE
// **********************************************

const activeComponent = ref<string>(''); 

// 10 Component Listesi (YENİ VE 10 MADDELİ)
const componentList = [
    { id: 1, label: 'Header Component', name: 'TheHeader' },
    { id: 2, label: 'Footer Component', name: 'TheFooter' },
    { id: 3, label: 'Ürün Kartı (8. Öge)', name: 'ProductCard' },
    { id: 4, label: 'Login Formu (4. Öge)', name: 'LoginForm' },
    { id: 5, label: 'Üye Ol Formu (5. Öge)', name: 'SignUpForm' }, // Yeni Buton
    { id: 6, label: 'Ürün Detay (7. Öge)', name: 'ProductDetail' },
    { id: 7, label: 'Sepet Sayfası (9. Öge)', name: 'ShoppingCart' },
    { id: 8, label: 'Slider (10. Öge)', name: 'PromoSlider' },
    { id: 9, label: 'Hsp. Aksiyon Grubu (9. Öge Molekülü)', name: 'AuthActionGroup' },
    { id: 10, label: 'Kampanya Listesi (10. Öge)', name: 'CampaignList' },
];

// MOCK DATA (Ürün Kartı için gerekli - BİREBİR AYNI GÖRSELLERİ KULLANIYORUZ)
const mockProduct = { 
    id: 99, 
    name: "UNIQ Better by Design Kılıf Tam Kamera Korumalı", 
    brand: "UNIQ", 
    price: 1234.90, 
    score: 4.5,
    reviewCount: 15, 
    imageUrl: "/slider/iphone-4.webp", // En son ürün kartındaki görseli kullandık
    isFastDelivery: true,
    isFreeShipping: true,
    isInstallment: true
}; 
</script>

<style scoped>
.control-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f7f7f7;
}

/* SOL: SİDEBAR STİLİ */
.component-list-sidebar {
  width: 300px;
  padding: 20px;
  background-color: #333;
  color: white;
  flex-shrink: 0;
}
.component-list-sidebar h2 {
    margin-bottom: 20px;
    font-size: 18px;
    border-bottom: 1px solid #555;
    padding-bottom: 10px;
}
.component-toggle-btn {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  text-align: left;
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}
.component-toggle-btn:hover {
  background-color: #555;
}
.component-toggle-btn.active-btn {
  background-color: #ff6000;
  color: white;
  font-weight: 700;
}

/* SAĞ: GÖSTERİM ALANI STİLİ */
.component-display-area {
  flex-grow: 1;
  padding: 30px;
  overflow-x: hidden;
}
.component-display-area h3 {
    color: #999;
}
/* Demo Alanları: Component'i ortalamak veya tam genişlik vermek için */
.demo-wrapper {
    max-width: 450px; 
    margin: 20px auto;
}
.demo-full-width {
    width: 100%; 
}
</style> 
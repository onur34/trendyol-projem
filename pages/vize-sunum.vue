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

      <OrganismsPromoSlider 
        v-show="activeComponent === 'PromoSlider'" 
        :sliderData="promoImages"
        class="demo-full-width" 
      />
      
      <MoleculesAuthActionGroup v-show="activeComponent === 'AuthActionGroup'" class="demo-wrapper" />
      <OrganismsCampaignList v-show="activeComponent === 'CampaignList'" class="demo-full-width" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeComponent = ref<string>('PromoSlider'); // Sunuma slider açık başlasın diye değiştirdim

const componentList = [
    { id: 1, label: 'Header Component', name: 'TheHeader' },
    { id: 2, label: 'Footer Component', name: 'TheFooter' },
    { id: 3, label: 'Ürün Kartı', name: 'ProductCard' },
    { id: 4, label: 'Login Formu', name: 'LoginForm' },
    { id: 5, label: 'Üye Ol Formu', name: 'SignUpForm' },
    { id: 6, label: 'Ürün Detay', name: 'ProductDetail' },
    { id: 7, label: 'Sepet Sayfası', name: 'ShoppingCart' },
    { id: 8, label: 'Slider (Kategori Carousel)', name: 'PromoSlider' },
    { id: 9, label: 'Auth Aksiyon Grubu', name: 'AuthActionGroup' },
    { id: 10, label: 'Kampanya Listesi', name: 'CampaignList' },
];

// SLIDER İÇİN VERİ SETİ
const promoImages = [
  { src: '/promo/resim1.png', alt: 'Kadın Giyim', bg: '#ffeef2' },
  { src: '/promo/resim2.png', alt: 'Erkek Giyim', bg: '#eaf4ff' },
  { src: '/promo/resim3.png', alt: 'Mobilya', bg: '#f7f5ff' },
  { src: '/promo/resim4.png', alt: 'Süpermarket', bg: '#f8ffe6' },
  { src: '/promo/resim5.png', alt: 'Elektronik', bg: '#eafbfa' },
  { src: '/promo/resim6.png', alt: 'Spor & Outdoor', bg: '#f9ffe7' },
  { src: '/promo/resim7.png', alt: 'Anne & Çocuk', bg: '#fff7fd' },
  { src: '/promo/resim8.png', alt: 'Kozmetik', bg: '#fff5ec' },
  { src: '/promo/resim9.png', alt: 'Ev Ürünleri', bg: '#f6f6ff' },
  { src: '/promo/resim10.png', alt: 'Kitap & Kırtasiye', bg: '#fff9e6' },
  { src: '/promo/resim11.png', alt: 'Ayakkabı & Çanta', bg: '#ecfff0' },
  { src: '/promo/resim12.png', alt: 'Oto & Yapı Market', bg: '#f7fff6' },
];

const mockProduct = { 
    id: 99, 
    name: "UNIQ Better by Design Kılıf Tam Kamera Korumalı", 
    brand: "UNIQ", 
    price: 1234.90, 
    score: 4.5,
    reviewCount: 15, 
    imageUrl: "/slider/iphone-4.webp",
    isFastDelivery: true,
    isFreeShipping: true,
    isInstallment: true
}; 
</script>

<style scoped>
/* Mevcut stillerin gayet iyi, aynen koru... */
.control-layout { display: flex; min-height: 100vh; background-color: #f7f7f7; }
.component-list-sidebar { width: 300px; padding: 20px; background-color: #333; color: white; }
.component-toggle-btn { display: block; width: 100%; padding: 12px; margin-bottom: 8px; text-align: left; background: none; border: none; color: #ccc; cursor: pointer; border-radius: 4px; }
.component-toggle-btn.active-btn { background-color: #ff6000; color: white; }
.component-display-area { flex-grow: 1; padding: 30px; }
.demo-wrapper { max-width: 450px; margin: 20px auto; }
.demo-full-width { width: 100%; }
</style> 
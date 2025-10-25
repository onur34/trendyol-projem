<template>
  <div class="home-page">
    
    <OrganismsTheHeader />

    <OrganismsTheFooter />

    <OrganismsLoginForm />
    
    <main class="main-content">
      </main>
    
    <OrganismsProductDetail />

    <OrganismsShoppingCart />

    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <p>Giriş Yap / Kayıt Ol Modal İçeriği</p>
        <button @click="closeModal">Kapat</button>
      </div>
    </div>
  </div>

  <OrganismsShoppingCart />

    <OrganismsPromoSlider />

    <div v-if="isModalOpen" class="modal-overlay">
    </div>


</template> 

<script setup lang="ts">
import { ref } from 'vue';

// TS Arayüzü: Ürün Verisinin Yapısı
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  discountRate?: number;
  reviewCount: number;
  imageUrl: string; 
}

// MOCK (Test) Verisi
const productList = ref<Product[]>([
  { id: 1, name: "Apple AirPods 3. Nesil", brand: "Apple", price: 8895.00, oldPrice: 10401.55, discountRate: 14, reviewCount: 9585, imageUrl: "/products/urun-2.jpg" }, 
  { id: 2, name: "iPhone 17 Pro Max Silikon Kılıf", brand: "MagSafe Özellikli", price: 2519.06, reviewCount: 3, imageUrl: "/products/urun-1.jpg" }, 
  { id: 3, name: "Apple Airtag (1 Pack)", brand: "Apple", price: 1959.00, oldPrice: 2000.00, discountRate: 2, reviewCount: 3185, imageUrl: "/products/urun-3.jpg" }, 
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
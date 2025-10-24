<template>
  <OrganismsTheHeader /> 

  <main class="product-list-container">
    <h1>Trendyol Klonu: Ürün Listesi</h1>

    <div class="product-grid">
        <OrganismsProductCard 
          v-for="p in productList" 
          :key="p.id" 
          :product="p" 
        />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// TS KURALI
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  reviewCount: number;
  oldPrice?: number;
  discountRate?: number;
}

// TEST VERİSİ (LÜTFEN uzantıyı DÜZELTİN: .jpg, .png veya .jpeg)
const productList = ref<Product[]>([
  { 
    id: 1, name: "Apple AirPods (3. nesil)", brand: "Apple", price: 8895.00, oldPrice: 10401.55, discountRate: 14, reviewCount: 9585,
    imageUrl: "/urun-2.jpg" // BURAYI KENDİ UZANTINIZLA DÜZELTİN!
  }, 
  { 
    id: 2, name: "iPhone 17 Pro Max Silikon Kılıf", brand: "MagSafe Özellikli", price: 2519.06, reviewCount: 3,
    imageUrl: "/urun-1.jpg" // BURAYI KENDİ UZANTINIZLA DÜZELTİN!
  }, 
  { 
    id: 3, name: "Apple Airtag (1 Pack)", brand: "Apple", price: 1959.00, oldPrice: 2000.00, discountRate: 2, reviewCount: 3185,
    imageUrl: "/urun-3.jpg" // BURAYI KENDİ UZANTINIZLA DÜZELTİN!
  }, 
]);
</script>

<style scoped>
.product-list-container { padding: 40px; text-align: center; }
.product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}
</style>

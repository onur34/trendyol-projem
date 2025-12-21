<template>
  <div class="product-card">
    <div class="badge-area">
      <div v-if="product.isFastDelivery" class="badge fast">HIZLI TESLİMAT</div>
      <div v-if="product.isFreeShipping" class="badge free">KARGO BEDAVA</div>
    </div>
    <div class="image-wrapper">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>
    <div class="info-wrapper">
      <p class="product-brand">{{ product.brand }}</p>
      <p class="product-name" :title="product.name">{{ product.name }}</p>
      
      <div class="rating-wrapper">
        <span class="score">{{ product.score || 4.5 }}</span>
        <span class="stars">★★★★★</span>
        <span class="count">({{ product.reviewCount || 10 }})</span>
      </div>

      <div class="price-area">
        <p class="current-price">{{ formatPrice(product.price) }} TL</p>
      </div>

      <div class="action-area">
        <button 
          class="add-to-cart-btn" 
          @click="handleAddToCart" 
          :disabled="localLoading"
        >
          {{ localLoading ? 'Ekleniyor...' : 'Sepete Ekle' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '~/stores/cart';
// YEREL INTERFACE YERİNE MERKEZİ TİPİ ÇAĞIRIYORUZ:
import type { Product } from '~/types';

// Props tanımında direkt 'Product' kullanıyoruz
const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();
const localLoading = ref(false);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2 }).format(price);
};

const handleAddToCart = async () => {
  localLoading.value = true;
  await cartStore.addToCart(props.product);
  localLoading.value = false;
};
</script>

<style scoped>
/* Mevcut CSS Kodların Aynı Kalacak */
.product-card { width: 100%; height: 100%; border: 1px solid #e6e6e6; border-radius: 8px; background: white; position: relative; display: flex; flex-direction: column; transition: box-shadow 0.2s; }
.product-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.badge-area { position: absolute; top: 10px; left: 10px; z-index: 2; display: flex; flex-direction: column; gap: 4px; }
.badge { font-size: 10px; font-weight: bold; color: white; padding: 3px 6px; border-radius: 3px; }
.badge.fast { background-color: #008000; }
.badge.free { background-color: #444; }
.image-wrapper { height: 200px; padding: 20px; display: flex; justify-content: center; align-items: center; }
.product-image { max-width: 100%; max-height: 100%; object-fit: contain; }
.info-wrapper { padding: 15px; flex: 1; display: flex; flex-direction: column; }
.product-brand { font-size: 12px; font-weight: 600; color: #f27a1a; margin-bottom: 4px; }
.product-name { font-size: 14px; color: #333; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 38px; }
.rating-wrapper { display: flex; align-items: center; gap: 4px; font-size: 12px; margin-bottom: 10px; }
.stars { color: #f27a1a; }
.count { color: #999; }
.price-area { margin-top: auto; margin-bottom: 10px; }
.current-price { font-size: 18px; font-weight: bold; color: #f27a1a; }
.add-to-cart-btn { width: 100%; padding: 10px; background-color: #f27a1a; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: background 0.2s; }
.add-to-cart-btn:hover { background-color: #d6640c; }
.add-to-cart-btn:disabled { background-color: #ccc; cursor: not-allowed; }
</style>
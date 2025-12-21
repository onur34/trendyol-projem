<template>
  <div class="cart-page-wrapper">
    <div class="cart-container">
      
      <h1 class="page-title">Sepetim ({{ cartStore.itemCount }} Ürün)</h1>

      <div class="cart-layout">
        <div class="cart-left">
          
          <div v-if="cartStore.loading" class="loading-msg">Sepetiniz güncelleniyor...</div>
          
          <div v-else-if="cartStore.items.length === 0" class="empty-msg">
            <h3>Sepetiniz şu an boş.</h3>
            <NuxtLink to="/" class="start-btn">Alışverişe Başla</NuxtLink>
          </div>

          <div v-else v-for="item in cartStore.items" :key="item.docId" class="merchant-box">
            
            <div class="merchant-header">
              <span class="merchant-name">{{ item.seller }}</span>
            </div>

            <div class="product-row">
              <img :src="item.image" :alt="item.title" class="item-img" />

              <div class="info-col">
                <h3 class="product-title">{{ item.title }}</h3>
                <p class="delivery-truck">🚚 Yarın kargoda!</p>
              </div>

              <div class="price-action-col">
                <button @click="cartStore.removeFromCart(item.docId)" class="delete-btn">
                  🗑 Sil
                </button>
                
                <div class="price-text">{{ item.price }} TL</div>

                <div class="qty-box">
                  <button @click="cartStore.updateQuantity(item.docId, item.quantity, -1)">-</button>
                  
                  <input type="text" :value="item.quantity || 1" readonly>
                  
                  <button @click="cartStore.updateQuantity(item.docId, item.quantity, 1)">+</button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="cart-right" v-if="cartStore.items.length > 0">
          <div class="summary-box">
            <h3>Sepet Özeti</h3>
            
            <div class="sum-row">
              <span>Ürünlerin Toplamı</span>
              <span>{{ cartStore.totalPrice }} TL</span>
            </div>
            
            <hr>

            <div class="total-row">
              <span>Toplam</span>
              <span class="total-price">{{ cartStore.totalPrice }} TL</span>
            </div>

            <button class="confirm-btn">Sepeti Onayla</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';

definePageMeta({ layout: 'default' });

const cartStore = useCartStore();

// Sayfa açıldığında verileri dinlemeye başla
onMounted(() => {
  cartStore.initCartListener();
});
</script>

<style scoped>
/* Mevcut Tasarım Kodların */
.cart-page-wrapper { background-color: #fafafa; min-height: 100vh; padding: 20px; font-family: sans-serif; }
.cart-container { max-width: 1200px; margin: 0 auto; }
.page-title { margin-bottom: 20px; font-size: 22px; }
.cart-layout { display: flex; gap: 20px; }
.cart-left { flex: 2; }
.cart-right { flex: 1; }

/* Boş Sepet */
.empty-msg { background: white; padding: 40px; text-align: center; border-radius: 8px; border: 1px solid #ddd; }
.start-btn { display: inline-block; margin-top: 10px; background: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; }

/* Ürün Kartı */
.merchant-box { background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden; }
.merchant-header { background: #fcfcfc; padding: 10px 20px; border-bottom: 1px solid #eee; font-weight: bold; font-size: 14px; }
.product-row { display: flex; padding: 20px; gap: 15px; align-items: flex-start; }
.item-img { width: 80px; height: 100px; object-fit: contain; border: 1px solid #eee; }
.info-col { flex: 1; }
.product-title { font-size: 14px; margin: 0 0 10px 0; color: #333; }
.delivery-truck { font-size: 12px; color: green; }

/* Fiyat ve Aksiyonlar */
.price-action-col { text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
.price-text { font-size: 18px; font-weight: bold; color: #333; }
.delete-btn { background: none; border: none; color: #999; cursor: pointer; font-size: 12px; display: flex; align-items: center; gap: 5px; }
.delete-btn:hover { color: red; }

/* ADET KUTUSU (UPDATE İÇİN ÖNEMLİ) */
.qty-box { display: flex; border: 1px solid #ddd; border-radius: 4px; height: 32px; background: white; }
.qty-box button { width: 30px; border: none; background: #fff; cursor: pointer; font-size: 18px; color: #666; }
.qty-box button:hover { background: #f9f9f9; color: orange; }
.qty-box input { width: 34px; border: none; text-align: center; font-size: 14px; border-left: 1px solid #ddd; border-right: 1px solid #ddd; outline: none; }

/* Özet */
.summary-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd; }
.sum-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
.total-row { display: flex; justify-content: space-between; font-size: 20px; font-weight: bold; color: orange; margin-top: 15px; }
.confirm-btn { width: 100%; background: orange; color: white; padding: 15px; border: none; border-radius: 6px; font-weight: bold; margin-top: 20px; cursor: pointer; }

@media (max-width: 768px) {
  .cart-layout { flex-direction: column; }
}
</style> 
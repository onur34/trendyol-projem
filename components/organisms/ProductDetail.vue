<template>
  <div class="highlight-container">
    <div class="product-wrapper">
      
      <div class="image-section">
        <div class="badges-stack">
          <span class="badge dark">KARGO BEDAVA</span>
          <span class="badge green">HIZLI TESLİMAT</span>
          <span class="badge blue">SİGORTAYA UYGUN</span>
        </div>
        
        <img src="/urun/iphone-17-pro.webp" alt="iPhone 17 Pro Max" class="main-img" />
        
        <button class="nav-arrow left">‹</button>
        <button class="nav-arrow right">›</button>
      </div>

      <div class="details-section">
        <div class="breadcrumbs">Anasayfa > Apple > Elektronik > Cep Telefonu > Apple iPhone iOS Cep Telefonları</div>
        
        <h2 class="product-title">Apple iPhone 17 Pro Max 256GB Kozmik Turuncu</h2>
        
        <div class="rating-row">
          <span class="stars">5.0 ★★★★★</span>
          <span class="review-text">(4 Değerlendirme) • 72 Soru-Cevap</span>
        </div>

        <div class="popular-tag">
          🏆 1.2B kişinin sepetinde, tükenmeden al!
        </div>

        <div class="price-tag">133.139 TL</div>

        <div class="variant-group">
          <span class="variant-label">Renk: <strong class="orange-text">Kozmik Turuncu</strong></span>
          <div class="color-options">
            <button class="color-btn active" style="background-color: #e65100;"></button>
            <button class="color-btn" style="background-color: #1a237e;"></button>
            <button class="color-btn" style="background-color: #e0e0e0;"></button>
          </div>
        </div>

        <div class="variant-group">
          <span class="variant-label">Dahili Hafıza: <strong class="orange-text">256 GB</strong></span>
          <div class="storage-options">
            <button class="storage-btn">1 TB</button>
            <button class="storage-btn">512 GB</button>
            <button class="storage-btn active">256 GB</button>
            <button class="storage-btn">2 TB</button>
          </div>
        </div>

        <div class="action-buttons">
          <button class="btn-now">Şimdi Al</button>
          
          <button class="btn-add-cart" @click="addToCart" :disabled="loading">
            <span v-if="!loading">🛒 Sepete Ekle</span>
            <span v-else>Ekleniyor...</span>
            <span class="stock-info">Son 3 Ürün</span>
          </button>
          
          <button class="btn-fav">♡</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';

const loading = ref(false);
const { $db } = useNuxtApp();

// --- FIREBASE CART TABLOSUNA YAZMA ---
const addToCart = async () => {
  loading.value = true;
  try {
    // Sepetim sayfasında görünecek verileri buraya giriyoruz
    await addDoc(collection($db as any, "cart"), {
      productId: "iphone-17-promax-highlight",
      title: "Apple iPhone 17 Pro Max 256GB Kozmik Turuncu",
      price: 133139,
      image: "/urun/iphone-17-pro.webp", // <-- Doğru resim yolu
      seller: "Apple Türkiye",
      quantity: 1,
      addedAt: new Date()
    });

    alert("Ürün sepete eklendi!");

  } catch (error) {
    console.error("Hata:", error);
    alert("Bir hata oluştu.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.highlight-container {
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  font-family: Arial, sans-serif;
}

.product-wrapper { display: flex; gap: 40px; }

/* SOL KISIM */
.image-section { flex: 1; position: relative; display: flex; justify-content: center; align-items: center; background: #fcfcfc; border-radius: 8px; min-height: 400px; }
.main-img { max-width: 80%; max-height: 350px; object-fit: contain; }

.badges-stack { position: absolute; top: 10px; left: 10px; display: flex; flex-direction: column; gap: 5px; }
.badge { color: white; padding: 4px 8px; font-size: 11px; font-weight: bold; border-radius: 4px; }
.dark { background: #333; }
.green { background: #008000; }
.blue { background: #007bff; }

.nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: white; border: 1px solid #ddd; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 18px; color: #666; }
.nav-arrow.left { left: 10px; }
.nav-arrow.right { right: 10px; }

/* SAĞ KISIM */
.details-section { flex: 1.2; }
.breadcrumbs { font-size: 12px; color: #666; margin-bottom: 10px; }
.product-title { font-size: 22px; color: #333; margin: 0 0 10px; }

.rating-row { font-size: 13px; color: #666; margin-bottom: 15px; }
.stars { color: #f27a1a; font-weight: bold; margin-right: 5px; }

.popular-tag { background: #fffbe6; border: 1px solid #ffe58f; color: #d48806; padding: 8px; font-size: 12px; border-radius: 4px; display: inline-block; margin-bottom: 15px; }

.price-tag { font-size: 28px; font-weight: bold; color: #333; margin-bottom: 20px; }

.variant-group { margin-bottom: 20px; }
.variant-label { font-size: 13px; color: #333; display: block; margin-bottom: 8px; }
.orange-text { color: #f27a1a; }

.color-options { display: flex; gap: 10px; }
.color-btn { width: 32px; height: 32px; border-radius: 50%; border: 1px solid #ddd; cursor: pointer; }
.color-btn.active { border: 2px solid #f27a1a; padding: 2px; }

.storage-options { display: flex; gap: 10px; }
.storage-btn { padding: 8px 15px; border: 1px solid #ddd; background: white; border-radius: 4px; cursor: pointer; font-size: 13px; }
.storage-btn.active { border: 1px solid #f27a1a; color: #f27a1a; font-weight: bold; }

/* AKSİYON BUTONLARI */
.action-buttons { display: flex; gap: 15px; margin-top: 30px; }
.btn-now { flex: 1; border: 1px solid #f27a1a; background: white; color: #f27a1a; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; }
.btn-add-cart { flex: 2; background: #f27a1a; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding-left: 20px; padding-right: 20px; }
.btn-add-cart:hover { background: #d6640c; }
.stock-info { font-size: 10px; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; }
.btn-fav { width: 45px; border: 1px solid #ddd; background: white; border-radius: 6px; cursor: pointer; font-size: 20px; color: #666; }

@media (max-width: 768px) {
  .product-wrapper { flex-direction: column; }
}
</style> 
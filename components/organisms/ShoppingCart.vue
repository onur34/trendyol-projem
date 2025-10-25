<template>
  <div class="shopping-cart-page">
    
    <h1 class="page-title">Sepetim (1 Ürün)</h1>

    <div class="cart-layout">
      
      <div class="cart-items-wrapper">
        
        <div class="login-prompt">
          <img src="/sepet/user.jpeg" alt="Giriş" class="prompt-icon" />
          Alışverişini daha hızlı tamamlamak için <a href="#" class="login-link">Giriş Yap</a>
        </div>
        
        <div class="cart-item-card">
          
          <div class="seller-info-container">
            <div class="seller-info">
              <input type="checkbox" checked class="item-checkbox item-checkbox-seller" />
              <span class="seller-name">BTSTEKNOLOJİ</span>
              <span class="seller-rating">9.3</span>
            </div>
          </div>
          
          <div class="free-shipping-bar">
            Kargo Bedava!
          </div>

          <div class="item-details">
            <div class="checkbox-wrapper">
                <input type="checkbox" checked class="item-checkbox" />
            </div>
            <img src="/urun/iphone-17-pro.webp" alt="Ürün Resmi" class="product-image-small" />
            
            <div class="item-text-info">
                <p class="product-name">Apple iPhone 17 Pro Max 256GB Kozmik Turuncu</p>
                <p class="item-status-text stock-highlight">1,252 kişinin sepetinde</p>
                <p class="item-status-text delivery-info">
                    <img src="/sepet/clock.png" alt="Saat" class="clock-icon" />
                    9 saat 3 dakikada içinde sipariş verirsen en geç yarın kargoda!
                </p>
                <p class="item-status-text delivery-info insurance">
                    Trendyol Sigorta ile cihazını koruyun, masraflardan kurtulun
                </p>
            </div>

            <div class="item-actions">
                <div class="action-icons">
                    <img src="/sepet/trash.webp" alt="Sil" class="trash-icon" />
                    <span class="save-for-later">Sil</span>
                </div>
                
                <p class="item-price">133.139 TL</p>
                
                <div class="qty-and-badge">
                    <p class="qty-badge">Maks. Adet</p>
                    <QuantitySelector v-model="itemQuantity" />
                </div>
            </div>
          </div>
        </div>

      </div>

      <div class="cart-summary-wrapper">
        <h2 class="summary-title">Sepet Özeti</h2>
        
        <div class="summary-line">
            <span>Ürünlerin Toplamı</span>
            <span class="summary-price">133.139 TL</span>
        </div>
        <div class="summary-line">
            <span>Kargo Tutarı</span>
            <span class="summary-price">44,99 TL</span>
        </div>
        <div class="summary-line free-shipping-line">
            <span>300 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
            <span class="summary-price">-44,99 TL</span>
        </div>
        
        <div class="fast-shipping-line">
            <p>9 saat 3 dakika içinde sipariş ver, ürünlerini hızlı teslim al!</p>
        </div>

        <div class="summary-line total-line">
            <span>Toplam</span>
            <span class="summary-price total-price">133.139 TL</span>
        </div>
        
        <div class="discount-code">
            <span class="discount-plus">+</span> İndirim Kodu Gir
        </div>

        <BaseButton variant="primary" class="confirm-button">
            Sepeti Onayla
            <span class="item-count-text">1 Ürün Tükenmek Üzere</span>
        </BaseButton>

      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Atomu ve diğer global component'leri import ediyoruz
import QuantitySelector from '@/components/atoms/QuantitySelector.vue';
import BaseButton from '@/components/atoms/BaseButton.vue'; 

const itemQuantity = ref(1); // QuantitySelector için v-model state'i
</script>

<style scoped>
/* Genel Düzen */
.shopping-cart-page {
    max-width: 1280px;
    margin: 30px auto;
    padding: 0 20px;
}
.page-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
}
.cart-layout {
    display: flex;
    gap: 25px;
}
.cart-items-wrapper {
    flex: 3;
}
.cart-summary-wrapper {
    flex: 1;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    height: fit-content;
}

/* 1. Sol Alan (Items) */
.login-prompt {
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 20px;
    background-color: #ffffe0; /* Açık sarı */
    border: 1px solid #fff3c4;
    border-radius: 6px;
    font-size: 14px;
}
.prompt-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    opacity: 0.7;
}
.login-link {
    color: #ff6000;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}

/* Ürün Kartı Stili (Cart Item Card) */
.cart-item-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
.seller-info-container {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
}
.seller-info {
    display: flex;
    align-items: center;
    font-size: 14px;
}
.item-checkbox-seller {
    margin-right: 10px;
}

.seller-name {
    font-weight: 600;
    margin-right: 10px;
}
.seller-rating {
    color: green;
    font-weight: 600;
}

/* KARGO BEDAVA BAR STİLİ */
.free-shipping-bar {
    background-color: #e6ffe6; /* Çok açık yeşil */
    color: #008000;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 0;
    text-align: center;
    margin: 0 -20px 20px -20px; /* Kenarlara taşması için negatif margin */
}


.item-details {
    display: flex;
    gap: 15px;
    position: relative;
    padding-top: 10px;
}
.item-checkbox {
    margin-top: 5px;
    transform: scale(1.2);
}
.product-image-small {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: 1px solid #eee;
    border-radius: 4px;
    position: relative;
}

/* Fiyat ve Akış */
.item-text-info {
    flex-grow: 1;
    min-width: 250px;
}
.product-name {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
}
.item-status-text {
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    align-items: center;
}
.stock-highlight {
    color: #f00;
}
.delivery-info {
    color: #007bff;
}
.delivery-info.insurance {
    color: #ff6000;
    background-color: #fff0e5;
    padding: 5px 10px;
    border-radius: 4px;
    display: inline-flex;
}
.clock-icon {
    width: 14px;
    height: 14px;
    margin-right: 5px;
}

/* Sağ Taraf: Fiyat ve Aksiyonlar */
.item-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    min-width: 120px;
    padding-left: 20px;
    border-left: 1px solid #eee;
}
.action-icons {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #999;
}
.trash-icon {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}
.save-for-later {
    font-size: 12px;
}
.item-price {
    font-size: 18px;
    font-weight: 700;
    color: #333;
}
.qty-and-badge {
    text-align: right;
}
.qty-badge {
    font-size: 11px;
    color: #999;
    margin-bottom: 5px;
}

/* Alt Kısım Rozeti */



/* 2. Sağ Alan (Summary) */
.summary-title {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
}
.summary-line {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
    color: #555;
}
.summary-line.free-shipping-line {
    color: green;
    font-weight: 600;
    margin-top: -5px;
    padding-bottom: 15px;
}
.summary-line.total-line {
    font-size: 18px;
    font-weight: 700;
    color: #ff6000;
    padding-top: 15px;
    border-top: 1px solid #eee;
}
.fast-shipping-line {
    background-color: #f0f8ff;
    color: #007bff;
    padding: 10px;
    border-radius: 4px;
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
}
.discount-code {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
    color: #ff6000;
    font-weight: 600;
    margin-bottom: 15px;
    border-radius: 4px;
    cursor: pointer;
}
.discount-plus {
    font-size: 18px;
    margin-right: 5px;
    vertical-align: middle;
}
.confirm-button {
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    display: block;
    width: 100%;
    margin-top: 10px;
}
.item-count-text {
    display: block;
    font-size: 10px;
    font-weight: 400;
    opacity: 0.8;
}
</style>  
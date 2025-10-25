<template>
  <div class="promo-slider-container">
    
    <div class="slider-wrapper">
      
      <div class="left-image-section">
        <SliderContent
          imageSrc="/promo/canta-1.webp"
          altText="Kahverengi Omuz Çantası"
          class="promo-image-card"
        />
        <SliderContent
          imageSrc="/promo/canta-2.jpg"
          altText="Hasır Plaj Çantası"
          class="promo-image-card"
        />
      </div>

      <div class="right-text-card">
        <p class="date-range">23 Temmuz - 30 Eylül</p>
        <h3 class="title">%10'a Varan İndirim</h3>
        <p class="subtitle">Stiline Uyacak Omuz Çantaları</p>
      </div>
      
    </div>

    <div class="slider-nav-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>

  </div>
</template>

<script setup lang="ts">
import SliderContent from '@/components/molecules/SliderContent.vue'; 
// Bu tasarımda v-for veya dinamik veri kullanmadığımız için ref veya computed'a gerek yok.
</script>

<style scoped>
/* components/organisms/PromoSlider.vue (SADECE STYLE KISMINDAKİ İLGİLİ BLOKLAR) */

.promo-slider-container {
  max-width: 1280px;
  margin: 30px auto;
  padding: 0 20px;
}
.slider-wrapper {
  display: flex;
  gap: 15px; 
  height: 220px; /* Görseldeki yüksekliğe göre ayarlandı */
  align-items: center; 
  /* *** YENİ: BÜTÜN SLIDER'IN ARKA PLANINI BELİRLİYORUZ *** */
  background-color:#F8B4AF; /* Pembe/Mercan rengi */
  padding: 15px; /* İçeriden boşluk bırakarak çerçeve hissi verir */
  border-radius: 12px;
  overflow: hidden;
}
/* ... geri kalan stiller aynı ... */

/* SOL TARAF: İKİ GÖRSEL YAN YANA */
.left-image-section {
    display: flex;
    gap: 15px;
    flex-shrink: 0; /* Küçülmesini engeller */
}
.promo-image-card {
    flex-shrink: 0;
    width: 250px; /* Her bir çantanın genişliği */
    height: 250px; /* Görseldeki yüksekliğe göre ayarlandı */
}

/* SAĞ TARAF: TEK BÜYÜK YAZI KARTI */
.right-text-card {
  flex-grow: 1; /* Kalan tüm alanı kaplar */
  background-color:transparent; /* Pembe/Mercan arka plan */
  border-radius: 12px;
  padding: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-align: right;
  min-width: 300px; /* Küçük ekranlarda okunabilirliği korumak için */
  position: relative;
}
.date-range {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  opacity: 0.8;
}
.title {
  font-size: 32px;
  font-weight: 900; 
  margin-bottom: 5px;
  line-height: 1.1;
}
.subtitle {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}

/* Navigasyon Noktaları (Görselde yok, bu yüzden isteğe bağlı) */
.slider-nav-dots {
    text-align: center;
    margin-top: 10px;
    display: none; /* Bu tasarımda gerek yok, gizledik */
}
.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 4px;
}
.dot.active {
    background-color: #ff6000;
}
</style> 
<template>
  <div :class="['campaign-card', variant]">
    
    <div class="image-section">
      <div class="img-wrapper">
        <img :src="imgLeft" alt="Görsel 1" class="campaign-image" />
      </div>
      <div class="img-wrapper">
        <img :src="imgRight" alt="Görsel 2" class="campaign-image" />
      </div>
    </div>
    
    <div class="text-section">
      <p v-if="logoSrc" class="logo-area">
          <img :src="logoSrc" alt="Marka Logo" class="brand-logo" />
      </p>
      <p class="date-range">{{ dateRange }}</p>
      <h3 class="title">{{ title }}</h3>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>
    
  </div>
</template>

<script setup lang="ts">
interface Props {
  imgLeft: string;
  imgRight: string;
  title: string;
  dateRange: string;
  subtitle?: string;
  logoSrc?: string; 
  variant: 'red' | 'blue' | 'light-red'; 
}

defineProps<Props>();
</script>

<style scoped>
.campaign-card {
  display: flex;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  width: 400px; 
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
/* *** VARYANT STİLLERİ (Arka Plan Renkleri) *** */
/* Bu renkler artık hem yazı hem de görsel arka planını belirleyecek */
.campaign-card.red { background-color: #e3888b; } 
.campaign-card.blue { background-color: #6377c8; } 
.campaign-card.light-red { background-color: #f0a8a8; } 


.image-section {
  display: flex;
  flex-shrink: 0;
  /* Resim bölümünün de kampanya kartının ana rengini almasını sağlar */
  background-color: inherit; 
}
.img-wrapper {
  width: 100px; 
  height: 100%;
  padding: 5px;
  /* BURAYI DEĞİŞTİRDİK: Beyaz arka planı kaldırdık */
  /* background-color: white; */ 
  background-color: inherit; /* Üst elementin (campaign-card) arka plan rengini alsın */
  display: flex;
  justify-content: center;
  align-items: center;
}
.campaign-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

/* YAZI BÖLÜMÜ */
.text-section {
  flex-grow: 1;
  padding: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  position: relative;
  /* Yazı bölümünün de kampanya kartının ana rengini almasını sağlar */
  background-color: inherit; 
  padding-top: 15px;
  
}
.logo-area {
   position: absolute;
    top: 15px;    /* Kartın iç padding'i kadar boşluk bırakıldı */
    right: 15px; /* Kartın iç padding'i kadar boşluk bırakıldı */
    padding-top: 0; /* Ekstra padding'i kaldır */
    z-index: 2; /* Logoyu öne çıkar */
}
.brand-logo {
    max-width: 50px;
    height: auto;
}
.date-range {
    position: static; 
    font-size: 10px;
    opacity: 0.8;
    margin-bottom: 5px; /* Başlıktan ayır */
    text-align: right; /* Sağa dayalı olsun */
    width: 100%;
}
.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 10px;
}
.subtitle {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.9;
}
</style> 
<template>
  <div class="campaign-list-container">
    

    <div class="campaign-list-wrapper">
      
      <CampaignCard 
        imgLeft="/kampanya/sandalet.jpeg"
        imgRight="/kampanya/ayak.webp"
        title="%10'a Varan İndirim"
        subtitle="Kombini Tamamla: Terlik & Sandalet"
        dateRange="23 Temmuz - 31 Ağustos"
        variant="light-red"
      />

      <CampaignCard 
        imgLeft="/kampanya/mavi-elbise.jpg"
        imgRight="/kampanya/beyaz-elbise.jpg"
        title="%30'a Varan İndirim"
        logoSrc="/kampanya/adL.png"
        dateRange="02 Temmuz - 31 Ağustos" 
        variant="blue"
      />
      
      <CampaignCard 
        imgLeft="/kampanya/pantolon.webp"
        imgRight="/kampanya/bot.webp"
        title="%10'a Varan İndirim"
        logoSrc="/kampanya/boyner.webp"
        dateRange="29 Temmuz - 30 Kasım"
        variant="red"
      />

    </div>
  </div>
</template>

<script setup lang="ts">
import CampaignCard  from '~/components/molecules/CampaignCard.vue';
// TypeScript ile Mock veri yapısını tanımlıyoruz
interface CampaignItem {
  title: string;
  imgLeft: string;
  imgRight: string;
  dateRange: string;
  variant: 'red' | 'blue' | 'light-red';
  subtitle?: string;
  logoSrc?: string;
}

// Bu mock data, yukarıdaki template'te manuel olarak kullanılmıştır.
/*
const campaignItems: CampaignItem[] = [
    // ... data ...
];
*/
</script>

<style scoped>
.campaign-list-container {
    max-width: 1280px;
    margin: 40px auto;
    padding: 0 20px;
}
.section-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
}
.campaign-list-wrapper {
    display: flex;
    gap: 20px;
    overflow-x: auto; 
    padding-bottom: 15px;
}
.campaign-list-wrapper::-webkit-scrollbar {
    display: none;
}
</style> 
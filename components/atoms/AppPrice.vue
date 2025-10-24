<template>
  <div class="price-container">
    <div v-if="discountRate" class="discount-rate">
      %{{ discountRate }}
    </div>

    <span v-if="oldPrice" class="old-price">{{ oldPrice.toFixed(2) }} TL</span>

    <span class="current-price">{{ price.toFixed(2) }} TL</span>
  </div>
</template>

<script setup lang="ts">
// TS KURALI: Dışarıdan 3 farklı veri bekleniyor.
interface Props {
  price: number; // Güncel fiyat (Zorunlu)
  oldPrice?: number; // Eski fiyat (Opsiyonel: ? işareti)
  discountRate?: number; // İndirim oranı (Opsiyonel)
}
const props = defineProps<Props>();
</script>

<style scoped>
.price-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
}
.current-price { 
    font-size: 16px; 
    font-weight: 700; 
    color: #333; /* Güncel fiyat genellikle siyahtır */
}
.old-price {
    font-size: 13px;
    color: #999;
    text-decoration: line-through; /* Üzeri çizili stil */
}
.discount-rate {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    background-color: #f27a1a; /* Trendyol Turuncusu */
    padding: 2px 5px;
    border-radius: 4px;
}
</style>
<template>
  <button class="icon-btn"><slot /></button>
</template>
<script setup lang="ts"></script>
<style scoped>
.icon-btn { 
    background: none; 
    border: none; 
    cursor: pointer; 
    font-size: 14px; 
    color: #333; 
    padding: 5px; 
    
    /* GÖRSELDEKİ DÜĞMELERİN TEMEL DÜZENİ */
    display: flex; 
    flex-direction: column; /* İçerik alt alta dizilsin (İkon üstte, yazı altta) */
    align-items: center; /* Ortala */
    text-align: center;
    line-height: 1.2;
}

/* İkonun yer tutucusunu simüle ediyoruz (Görseldeki ikona karşılık gelen üst kısım) */
.icon-btn::before {
    content: ' '; 
    display: block;
    width: 24px; /* Simgenin genişliği */
    height: 24px; /* Simgenin yüksekliği */
    margin-bottom: 2px;
    
    /* Geçici İkon Simülasyonu */
    background-color: #f27a1a; /* İkonun yerinde geçici olarak hafif gri (veya turuncu) bir işaret. Görselde ikonların içi boştur. */
    opacity: 0.1; /* Sadece yerini belli etmesi için çok hafif bir işaret */
    mask-image: url('placeholder.svg'); /* Normalde gerçek ikon buraya gelir */
    -webkit-mask-image: url('placeholder.svg');
}
</style>  
<template>
  <button class="icon-btn">
      <slot />
  </button>
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

    /* Metinleri alt alta değil, yan yana gösteren temel düzen */
    display: flex; 
    align-items: center; 
    /* Gerekirse buraya sade bir font-weight eklenebilir */
}
/* İkon Simülasyonu (Gri kutu) TAMAMEN KALDIRILDI */
</style>

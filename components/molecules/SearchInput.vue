<template>
  <div class="search-area">
    <input 
      type="text" 
      placeholder="Aradığınız ürün, marka veya kategori" 
      class="search-input"
    />
    <button class="search-btn">ARA</button>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.search-area { 
    display: flex; 
    flex-grow: 1; 
    max-width: 500px; 
}
.search-input { 
    flex-grow: 1; 
    padding: 10px 15px; 
    border: 1px solid #d9d9d9; 
    border-right: none; 
    border-radius: 4px 0 0 4px; 
}
.search-btn { 
    background-color: #f3f3f3; 
    border: 1px solid #d9d9d9; 
    border-left: none; 
    padding: 10px 15px; 
    border-radius: 0 4px 4px 0; 
}
</style>
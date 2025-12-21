<template>
  <div class="home-container">
    <OrganismsPromoSlider />
    <OrganismsCampaignList />
    <OrganismsProductDetail />

    <h2 class="section-title">Günün Fırsatları</h2>

    <section class="products-section">
      <div v-if="productStore.loading" class="loading-area">
        Ürünler yükleniyor...
      </div>
      
      <div v-else class="product-grid">
        <OrganismsProductCard 
          v-for="product in productStore.products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </section>

    <div class="auth-action-centered">
      <MoleculesAuthActionGroup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '~/stores/product';

definePageMeta({ layout: 'default' });

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped>
/* CSS'lerin aynı kalacak */
.home-container { max-width: 1200px; margin: 0 auto; padding: 20px 15px; }
.section-title { color: #333; font-size: 20px; font-weight: bold; margin: 20px 0; display: inline-block; }
.loading-area { text-align: center; padding: 40px; font-size: 18px; color: #666; }
.product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 40px; }
.auth-action-centered { display: flex; justify-content: center; margin: 40px 0; }
@media (max-width: 992px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px) { .product-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
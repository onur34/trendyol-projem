<template>
  <div class="product-card">
    <div class="image-area">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>

    <div class="details-area">
        <MoleculesProductBadge text="PEŞİN FİYATINA TAKSİT" type="purple" class="taksit-badge" /> 

        <p class="product-name">{{ product.name }}</p>
        
        <AtomsRatingStars :review-count="product.reviewCount" />

        <AtomsAppPrice 
          :price="product.price" 
          :old-price="product.oldPrice" 
          :discount-rate="product.discountRate"
        /> 
        
        <AtomsAddToCartButton />
    </div>
  </div>
</template>

<script setup lang="ts">
// TS KURALI
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  reviewCount: number;
  oldPrice?: number;
  discountRate?: number;
}
interface Props { product: Product; }
const props = defineProps<Props>();
</script>

<style scoped>
.product-card {
    border: 1px solid #eee;
    padding: 10px;
    width: 250px;
    margin: 10px;
    text-align: left !important; 
    display: inline-block;
    vertical-align: top;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.image-area {
    position: relative;
    height: 250px; 
    overflow: hidden;
    margin-bottom: 10px;
}
.product-image {
    width: 100%;
    height: 100%;
    object-fit: contain; 
    display: block;
}
.product-name {
    font-size: 14px;
    color: #333;
    line-height: 1.3;
    min-height: 40px; 
    margin-bottom: 5px;
}
.details-area > * {
    text-align: left;
}
/* Taksit Yazısının Konumlandırılması */
.taksit-badge {
    margin-top: 0; 
    margin-bottom: 5px; /* Ürün adından ayrılması için boşluk */
    display: block; 
    width: fit-content; 
}
</style> 
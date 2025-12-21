// stores/category.ts
import { defineStore } from 'pinia';
// Eğer kategorileri de firebase'den çekiyorsan buraya firebase kodlarını eklersin.
// Şimdilik slider verilerini burada tutarak "Store mantığına" uyduruyoruz.

export const useCategoryStore = defineStore('category', {
  state: () => ({
    sliderItems: [
      { id: 1, image: '/slider/iphone-1.webp', alt: 'iPhone 15' },
      { id: 2, image: '/slider/samsung-1.webp', alt: 'Samsung S24' },
      // Diğer slider resimlerin...
    ]
  }),
  // Buraya actions ekleyip Firebase 'categories' tablosundan da çekebilirsin.
}); 
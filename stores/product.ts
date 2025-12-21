// stores/product.ts
import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
// MERKEZİ TİP DOSYASINDAN ÇEKİYORUZ:
import type { Product } from '~/types';

export const useProductStore = defineStore('product', {
  state: () => ({
    // Burada Product tipini kullanıyoruz
    products: [] as Product[],
    loading: false,
  }),

  actions: {
    async fetchProducts() {
      if (this.products.length > 0) return;
      
      const { $db } = useNuxtApp();
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection($db as any, "products"));
        this.products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        this.loading = false;
      }
    }
  }
}); 
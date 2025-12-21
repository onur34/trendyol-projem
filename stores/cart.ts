// stores/cart.ts
import { defineStore } from 'pinia';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore';
// TİPİMİZİ BURADAN ÇAĞIRIYORUZ:
import type { CartItem } from '~/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    // Artık 'any' değil, 'CartItem' listesi olduğunu belirtiyoruz
    items: [] as CartItem[],
    loading: false,
  }),

  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0),
    itemCount: (state) => state.items.length
  },

  actions: {
    // 1. DİNLEME
    initCartListener() {
      const { $db } = useNuxtApp();
      this.loading = true;
      onSnapshot(collection($db as any, "cart"), (snapshot) => {
        // Gelen veriyi CartItem tipine zorluyoruz (as CartItem[])
        this.items = snapshot.docs.map(doc => ({
          docId: doc.id,
          ...doc.data()
        })) as CartItem[];
        this.loading = false;
      });
    },

    // 2. EKLEME
    async addToCart(product: any) {
      const { $db } = useNuxtApp();
      try {
        await addDoc(collection($db as any, "cart"), {
          productId: product.id || "unknown",
          title: product.name || product.title,
          price: product.price,
          image: product.imageUrl || product.image,
          seller: product.brand || product.seller || "Satıcı",
          quantity: 1,
          addedAt: new Date()
        });
        alert("Sepete Eklendi!");
      } catch (error) {
        console.error("Ekleme Hatası:", error);
      }
    },

    // 3. GÜNCELLEME (UPDATE)
    async updateQuantity(docId: string, currentQty: number, change: number) {
      const { $db } = useNuxtApp();
      const newQty = (currentQty || 1) + change;

      if (newQty < 1) return;

      try {
        const docRef = doc($db as any, "cart", docId);
        await updateDoc(docRef, { quantity: newQty });
      } catch (error) {
        console.error("Güncelleme Hatası:", error);
      }
    },

    // 4. SİLME
    async removeFromCart(docId: string) {
      if(!confirm("Bu ürünü silmek istiyor musunuz?")) return;
      const { $db } = useNuxtApp();
      try {
        await deleteDoc(doc($db as any, "cart", docId));
      } catch (error) {
        console.error("Silme Hatası:", error);
      }
    }
  }
}); 
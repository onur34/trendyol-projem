<template>
  <div class="carousel-full">
    <button class="carousel-arrow left" @click="prev" :disabled="startIndex === 0">‹</button>
    
    <div class="carousel-track">
      <div v-if="loading" style="padding: 20px; text-align:center; width:100%">
        Kategoriler yükleniyor...
      </div>

      <div v-else-if="categories.length === 0" style="padding: 20px; text-align:center; width:100%">
        Kategori bulunamadı.
      </div>
      
      <div
        v-else
        class="carousel-list"
        :style="{ transform: `translateX(-${startIndex * (cardWidth + gap)}px)` }"
      >
        <div v-for="item in categories" :key="item.id" class="carousel-item">
          <div class="carousel-card" :style="{ background: item.bg || '#f2f2f2' }">
            <img :src="item.src" :alt="item.alt" class="carousel-img-top" />
          </div>
          <div class="carousel-label-outside">{{ item.alt }}</div>
        </div>
      </div>
    </div>

    <button
      class="carousel-arrow right"
      @click="next"
      :disabled="startIndex >= categories.length - cardsToShow"
    >›</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';

// Tip tanımlaması
type CategoryItem = { id?: string; src: string; alt: string; bg: string };

const categories = ref<CategoryItem[]>([]);
const loading = ref(true);

// Carousel ayarları
const cardsToShow = 5; 
const cardWidth = 190;
const gap = 24;
const startIndex = ref(0);

// Sayfa açıldığında Firebase'den verileri çek
onMounted(async () => {
  try {
    const { $db } = useNuxtApp();
    
    // 'categories' koleksiyonuna bağlan
    const querySnapshot = await getDocs(collection($db as any, "categories"));
    
    // Verileri diziye aktar
    categories.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as CategoryItem[];

    // Resimlerin isim sırasına göre (resim1, resim2...) düzgün dizilmesi için sıralama (Opsiyonel)
    categories.value.sort((a, b) => {
       // src içindeki sayıları karşılaştırarak sıralar
       const numA = parseInt(a.src.replace(/[^0-9]/g, '')) || 0;
       const numB = parseInt(b.src.replace(/[^0-9]/g, '')) || 0;
       return numA - numB;
    });

  } catch (error) {
    console.error("Kategori çekme hatası:", error);
  } finally {
    loading.value = false;
  }
});

function prev() {
  if (startIndex.value > 0) startIndex.value -= 1;
}

function next() {
  if (categories.value.length > cardsToShow) {
     if (startIndex.value < categories.value.length - cardsToShow) startIndex.value += 1;
  }
}
</script>

<style scoped>
/* Tasarım CSS'leri */
.carousel-full { width: 100vw; max-width: 100vw; overflow: hidden; background: #fff; display: flex; align-items: center; position: relative; box-sizing: border-box; padding: 0; }
.carousel-track { width: 100vw; max-width: 100vw; overflow: hidden; background: #fff; display: flex; align-items: center; padding: 27px 0; }
.carousel-list { display: flex; gap: 24px; transition: transform 0.35s cubic-bezier(.4,0,.2,1); width: max-content; }
.carousel-item { display: flex; flex-direction: column; align-items: center; width: 190px; min-width: 190px; }
.carousel-card { width: 190px; height: 190px; border-radius: 18px; overflow: hidden; background: #eee; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 14px rgba(30,40,68,0.08); position: relative; }
.carousel-img-top { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.carousel-label-outside { margin-top: 14px; font-size: 17px; font-weight: 700; color: #444; text-align: center; width: 100%; background: none; line-height: 1.19; }
.carousel-arrow { width: 45px; height: 45px; background: rgba(125,125,125,0.15); color: #484848; border: none; border-radius: 50%; font-size: 26px; cursor: pointer; display: flex; align-items: center; justify-content: center; position: relative; z-index: 2; transition: background 0.14s; margin: 0 7px; }
.carousel-arrow:disabled { opacity: 0.33; cursor: default; }

@media (max-width: 1070px) { .carousel-card, .carousel-item { width: 132px; min-width: 132px; } .carousel-card { height: 132px; } .carousel-label-outside { font-size: 13px; } }
@media (max-width: 700px) { .carousel-track { padding: 12px 0; } .carousel-arrow { width: 33px; height: 33px; font-size: 19px; } }
</style>
// nuxt.config.ts dosyasının içeriği
export default defineNuxtConfig({
  // Zorunlu Modüller: Pinia
  modules: [
    '@pinia/nuxt',
  ],

  // Zorunlu TS ayarı ve Sayfa Yolu (base) ayarı
  app: {
    // Projenin kök dizinden (/) başlamasını sağlar.
    baseURL: '/' 
  },
  
  // Geliştirici araçları (isteğe bağlı ama faydalı)
  devtools: { enabled: true },
})




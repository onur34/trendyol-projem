// stores/auth.ts
import { defineStore } from 'pinia';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile 
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any, // Giriş yapan kullanıcı bilgisi
  }),

  actions: {
    // 1. KAYIT OL (Register)
    async register(email: string, pass: string) {
      const { $auth } = useNuxtApp();
      try {
        // Firebase'de kullanıcı oluştur
        const userCredential = await createUserWithEmailAndPassword($auth as any, email, pass);
        this.user = userCredential.user;
        
        // Kullanıcı bilgisini Firebase'e de yazabilirsin (Users tablosuna)
        // Ama şimdilik sadece Auth işlemi yeterli.
        alert("Başarıyla kayıt olundu! Giriş yapabilirsiniz.");
        return true;
      } catch (error: any) {
        console.error("Kayıt Hatası:", error);
        alert("Hata: " + error.message);
        return false;
      }
    },

    // 2. GİRİŞ YAP (Login)
    async login(email: string, pass: string) {
      const { $auth } = useNuxtApp();
      try {
        const userCredential = await signInWithEmailAndPassword($auth as any, email, pass);
        this.user = userCredential.user;
        alert("Giriş Başarılı! Hoşgeldiniz.");
        return true; // Başarılı döndür
      } catch (error: any) {
        console.error("Giriş Hatası:", error);
        alert("Giriş başarısız! Bilgileri kontrol edin.");
        return false;
      }
    },

    // 3. ÇIKIŞ YAP (Logout)
    async logout() {
      const { $auth } = useNuxtApp();
      await signOut($auth as any);
      this.user = null;
      navigateTo('/login');
    }
  }
}); 
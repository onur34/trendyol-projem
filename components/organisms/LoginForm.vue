<template>
  <div class="auth-card">
    <p v-if="currentTab === 'login'" class="auth-header-text">
      Merhaba, <br> Trendyol'a giriş yap veya hesap oluştur, indirimleri kaçırma!
    </p>
    
    <AuthTabSelector v-model:activeTab="currentTab" />
    
    <div v-if="currentTab === 'login'" class="form-area">
      <label class="input-label">E-Posta</label>
      <input 
        v-model="email" 
        type="email" 
        class="trendyol-input-style" 
        placeholder="E-posta adresiniz" 
      /> 

      <label class="input-label password-label">Şifre</label>
      <div class="password-input-wrapper">
        <input 
          v-model="password" 
          type="password" 
          class="trendyol-input-style" 
          placeholder="Şifreniz" 
        /> 
        <span class="password-toggle">
          <img src="/login/göz.png" alt="Şifre Gizle/Göster" />
        </span>
      </div>

      <p class="forgot-password">Şifremi Unuttum</p>
      
      <button class="main-login-btn" @click="handleLogin">GİRİŞ YAP</button>

      <div class="social-buttons-container">
        <div class="social-btn facebook">
          <img src="/login/facebook.png" class="social-icon"> Facebook <span>ile giriş yap</span>
        </div>
        <div class="social-btn google">
          <img src="/login/google.png" class="social-icon"> Google <span>ile giriş yap</span>
        </div>
      </div>
      
      <p class="support-text">Üyelik olmadan verilen siparişlerle ilgili destek sağlanamamaktadır.</p>
    </div>

    <div v-else class="form-area">
      <SignUpForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthTabSelector from '@/components/molecules/AuthTabSelector.vue'; 
import SignUpForm from '@/components/organisms/SignUpForm.vue'; 

const currentTab = ref<'login' | 'register'>('login');
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  // 1. Basit Format Kontrolü
  if (!email.value.includes('@')) {
    alert("Geçersiz e-posta formatı!");
    return;
  }

  const auth = getAuth();
  try {
    // 2. Firebase Giriş İşlemi
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Giriş başarılı:", userCredential.user);
    alert("Hoş geldiniz! Giriş başarılı.");
  } catch (error: any) {
    console.error("Giriş hatası:", error.code);
    // Hata Mesajları
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      alert("Hata: E-posta veya şifre hatalı!");
    } else {
      alert("Bir hata oluştu: " + error.message);
    }
  }
};
</script>

<style scoped>
.auth-card { width: 400px; margin: 50px auto; padding: 30px; background: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); font-family: sans-serif; }
.auth-header-text { font-size: 18px; text-align: center; margin-bottom: 20px; color: #333; }
.input-label { display: block; margin-top: 15px; font-weight: 600; font-size: 14px; }
.trendyol-input-style { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; margin-top: 5px; box-sizing: border-box; font-size: 14px; }
.password-input-wrapper { position: relative; }
.password-toggle { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); opacity: 0.5; }
.password-toggle img { width: 18px; }
.forgot-password { text-align: right; font-size: 13px; color: #f38220; margin-top: 8px; cursor: pointer; font-weight: 600; }
.main-login-btn { width: 100%; height: 50px; background: #ff6000; color: white; border: none; border-radius: 6px; margin-top: 20px; font-weight: bold; cursor: pointer; font-size: 16px; }
.social-buttons-container { display: flex; gap: 10px; margin-top: 20px; }
.social-btn { flex: 1; border: 1px solid #ddd; padding: 10px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; cursor: pointer; font-weight: 600; }
.social-icon { height: 18px; margin-right: 5px; }
.support-text { margin-top: 20px; font-size: 11px; color: #888; text-align: center; }
</style>
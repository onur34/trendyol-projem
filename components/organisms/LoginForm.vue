<template>
  <div class="auth-card">
    
    <p class="auth-header-text">Merhaba, <br> Trendyol'a giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
    
    <AuthTabSelector v-model:activeTab="currentTab" />
    
    <div v-if="currentTab === 'login'" class="form-area">
      
      <label class="input-label">E-Posta</label>
      <BaseInput type="email" placeholder="" v-model="email" /> 

      <label class="input-label password-label">Şifre</label>
      <div class="password-input-wrapper">
        <BaseInput type="password" placeholder="" v-model="password" /> 
        <span class="password-toggle">
          <img src="/login/göz.png" alt="Şifre Gizle/Göster" />
        </span>
      </div>

      <p class="forgot-password" @click="console.log('Şifremi unuttum')">Şifremi Unuttum</p>
      
      <BaseButton variant="primary" class="main-button">GİRİŞ YAP</BaseBUTTON>

      <div class="social-buttons-container">
        <BaseButton variant="facebook" class="social-button">
          <img src="/login/facebook.png" class="social-icon" alt="Facebook"> Facebook <span class="small-text">ile giriş yap</span>
        </BaseButton>
        <BaseButton variant="google" class="social-button">
          <img src="/login/google.png" class="social-icon" alt="Google"> Google <span class="small-text">ile giriş yap</span>
        </BaseButton>
      </div>
      
      <p class="support-text">Üyelik olmadan verilen siparişlerle ilgili olarak bu kanal üzerinden destek sağlanamamaktadır. İlgili siparişleriniz için 0212 331 02 00 numaralı hattımızdan bize dilediğiniz zaman ulaşabilirsiniz.</p>
    </div>

    <div v-else class="form-area">
      <p>Üye Ol Formu Buraya Gelecek</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Component'lerin yollarını kendi projenizdeki gibi varsayıyorum:
import BaseInput from '@/components/atoms/BaseInput.vue'; 
import BaseButton from '@/components/atoms/BaseButton.vue';
import AuthTabSelector from '@/components/molecules/AuthTabSelector.vue'; 

const currentTab = ref<'login' | 'register'>('login');
const email = ref<string>('');
const password = ref<string>('');
</script>

<style scoped>
/* Kart ve Başlık */
.auth-card {
  width: 400px;
  max-width: 90%;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}
.auth-header-text {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.4;
  font-weight: 500;
  color: #333;
}
/* Input ve Label */
.input-label {
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
}
.password-input-wrapper {
  position: relative;
}
.password-toggle {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.password-toggle img {
    height: 15px;
    width: auto;
    opacity: 0.6;
}
.forgot-password {
  text-align: right;
  font-size: 13px;
  color: #f38220;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
}
/* Sosyal Medya */
.social-buttons-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.social-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}
.social-icon {
    height: 20px;
    width: auto;
    margin-right: 8px;
}
.social-button .small-text {
    font-weight: 400;
    margin-left: 5px;
}
/* Destek Metni */
.support-text {
    margin-top: 20px;
    font-size: 11px;
    color: #888;
    line-height: 1.4;
    text-align: center;
}
</style> 
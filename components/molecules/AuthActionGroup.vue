<template>
  <div class="auth-action-group">
    
    <div class="user-login-text">
      <img src="/uyelik/uye.jpeg" alt="Kullanıcı" class="user-icon" />
      <span>Giriş Yap</span>
    </div>

    <BaseButton 
      variant="primary" 
      class="big-action-button login-button"
      @click="gitLogin"
    >
      Giriş Yap
    </BaseButton>

    <BaseButton 
      variant="secondary" 
      class="big-action-button register-button"
      @click="gitRegister"
    >
      Üye Ol
    </BaseButton>
    
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue';
import { useRouter } from 'vue-router'; // Yönlendirme için

const router = useRouter();

const gitLogin = () => {
  // Login sayfasına gönder
  router.push('/login'); 
};

const gitRegister = () => {
  // Üye ol sayfasına gönder
  router.push('/register'); 
};
</script>

<style scoped>
/* CSS kısımların aynen kalıyor, dokunmana gerek yok */
.auth-action-group {
    width: 250px;
    padding: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.user-login-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    font-weight: 600;
    color: #ff6000;
}
.user-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}
.big-action-button {
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    border-radius: 6px;
    cursor: pointer;
}
.login-button {
    background-color: #ff6000;
    color: white;
    border: none;
}
.register-button {
    background-color: white;
    color: #333;
    border: 1px solid #ddd;
}
</style> 
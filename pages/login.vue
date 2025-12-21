<template>
  <div class="login-container">
    
    <div class="brand-header">
      <h2>TURUNCU<span class="bold">MARKET</span></h2>
    </div>

    <div class="auth-box">
      <div class="tabs">
        <button 
          :class="['tab-btn', { active: isLoginMode }]" 
          @click="isLoginMode = true"
        >
          Giriş Yap
        </button>
        <button 
          :class="['tab-btn', { active: !isLoginMode }]" 
          @click="isLoginMode = false"
        >
          Üye Ol
        </button>
      </div>

      <div class="form-content">
        
        <div class="input-group">
          <label>E-Posta</label>
          <input type="email" v-model="email" placeholder="E-posta adresinizi giriniz" />
        </div>

        <div class="input-group">
          <label>Şifre</label>
          <input type="password" v-model="password" placeholder="Şifrenizi giriniz" />
          <a href="#" class="forgot-pass" v-if="isLoginMode">Şifremi Unuttum</a>
        </div>

        <button class="submit-btn" @click="handleAuth">
          {{ isLoginMode ? 'GİRİŞ YAP' : 'ÜYE OL' }}
        </button>

        <div class="social-login">
          <div class="social-btn facebook">
            <span class="icon">f</span> Facebook ile {{ isLoginMode ? 'Giriş Yap' : 'Üye Ol' }}
          </div>
          <div class="social-btn google">
            <span class="icon">G</span> Google ile {{ isLoginMode ? 'Giriş Yap' : 'Üye Ol' }}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth'; // Store'u çağırdık

// Bu sayfa 'auth' layout kullanacak (Headersız)
definePageMeta({ layout: 'auth' });

const authStore = useAuthStore();
const isLoginMode = ref(true); // true = Giriş, false = Kayıt
const email = ref('');
const password = ref('');

const handleAuth = async () => {
  if (!email.value || !password.value) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  if (isLoginMode.value) {
    // --- GİRİŞ YAP ---
    const success = await authStore.login(email.value, password.value);
    if (success) {
      navigateTo('/'); // Başarılıysa anasayfaya git
    }
  } else {
    // --- ÜYE OL ---
    const success = await authStore.register(email.value, password.value);
    if (success) {
      isLoginMode.value = true; // Kayıt olduktan sonra giriş ekranına at
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.brand-header {
  margin-bottom: 20px;
  color: #f27a1a;
}
.brand-header h2 { font-size: 28px; font-weight: normal; margin: 0; }
.bold { font-weight: bold; }

/* BEYAZ KUTU */
.auth-box {
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  border-radius: 8px;
  overflow: hidden;
}

/* TABLAR */
.tabs {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
}
.tab-btn {
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}
.tab-btn.active {
  color: #f27a1a;
  border-bottom: 3px solid #f27a1a;
}
.tab-btn:hover { color: #333; }

/* FORM İÇERİĞİ */
.form-content { padding: 30px; }

.input-group { margin-bottom: 20px; text-align: left; }
.input-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 7px;
}
.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  background-color: #fafafa;
  transition: border 0.2s;
  box-sizing: border-box; /* Input taşmasını engeller */
}
.input-group input:focus { border-color: #f27a1a; background-color: #fff; }

.forgot-pass {
  display: block;
  text-align: right;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  text-decoration: none;
}
.forgot-pass:hover { text-decoration: underline; }

/* TURUNCU BUTON */
.submit-btn {
  width: 100%;
  background-color: #f27a1a;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 20px;
}
.submit-btn:hover { background-color: #d6640c; }

/* SOSYAL MEDYA */
.social-login { display: flex; flex-direction: column; gap: 10px; }
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
}
.social-btn:hover { background-color: #fcfcfc; }
.social-btn .icon { font-weight: bold; font-size: 16px; }
.facebook .icon { color: #1877f2; }
.google .icon { color: #ea4335; }
</style>
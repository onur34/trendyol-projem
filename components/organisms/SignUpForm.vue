<template>
  <div class="sign-up-form">
    
    <label class="input-label">E-Posta</label>
    <BaseInput type="email" v-model="email" /> 

    <label class="input-label password-label">Şifre</label>
    <div class="password-input-wrapper">
      <BaseInput type="password" placeholder="" v-model="password" /> 
      <span class="password-toggle">
        <img src="/login/göz.png" alt="Şifre Gizle/Göster" />
      </span>
    </div>
    <p class="password-info">Şifreniz en az 10 karakter olmalı. 1 büyük harf, 1 küçük harf ve rakam içermelidir.</p>

    <div class="gender-section-wrapper">
      <p class="gender-title">İlgilendiğiniz ürün grubunu seçer misin?</p>
      <div class="gender-btn-group">
        <button 
          type="button"
          class="gender-option"
          :class="{ 'is-active': gender === 'kadin' }" 
          @click="gender = 'kadin'"
        >Kadın</button>
        <button 
          type="button"
          class="gender-option"
          :class="{ 'is-active': gender === 'erkek' }" 
          @click="gender = 'erkek'"
        >Erkek</button>
      </div>
    </div>

    <div class="checkbox-area">
      <div class="checkbox-row">
        <div class="checkbox-box">
           <BaseCheckbox v-model="isConsented" />
        </div>
        <div class="checkbox-text">
          Tarafıma avantajlı tekliflerin sunulabilmesi amacıyla kişisel verilerimin işlenmesine ve paylaşılmasına <span class="orange-bold">açık rıza</span> veriyorum.
        </div>
      </div>
      
      <div class="checkbox-row">
        <div class="checkbox-box">
           <BaseCheckbox v-model="isEmailAccepted" />
        </div>
        <div class="checkbox-text">
          Tarafıma elektronik ileti gönderilmesini <span class="orange-bold">kabul ediyorum.</span>
        </div>
      </div>

      <div class="checkbox-row">
        <div class="checkbox-box">
           <BaseCheckbox v-model="isPolicyRead" />
        </div>
        <div class="checkbox-text">
          Kişisel verilerimin işlenmesine yönelik <span class="orange-bold">aydınlatma metnini</span> okudum ve anladım.
        </div>
      </div>
    </div>

    <div class="recaptcha-box-fixed">
        <div class="recaptcha-left">
            <BaseCheckbox v-model="isNotRobot" />
            <span class="robot-label">Ben robot değilim</span>
        </div>
        <div class="recaptcha-right">
            <div class="captcha-branding">
              <p>reCAPTCHA</p>
              <div class="captcha-links">
                <a href="#">Gizlilik</a> - <a href="#">Şartlar</a>
              </div>
            </div>
        </div>
    </div>

    <BaseButton variant="primary" class="main-button" @click="handleSignUp">ÜYE OL</BaseButton>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BaseInput from '@/components/atoms/BaseInput.vue'; 
import BaseButton from '@/components/atoms/BaseButton.vue';
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'; 

const email = ref('');
const password = ref('');
const gender = ref('');
const isConsented = ref(false);
const isEmailAccepted = ref(false);
const isPolicyRead = ref(false);
const isNotRobot = ref(false);

const handleSignUp = async () => {
  // Şart Kontrolleri
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) { alert("Geçersiz e-posta!"); return; }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
  if (!passwordRegex.test(password.value)) { alert("Şifre kriterlere uymuyor!"); return; }
  if (!isPolicyRead.value) { alert("Lütfen metni onaylayın."); return; }

  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Kayıt Başarılı!");
  } catch (error: any) {
    alert("Hata: " + error.message);
  }
};
</script>

<style scoped>
.sign-up-form { padding-top: 5px; }
.input-label { display: block; margin-top: 15px; margin-bottom: 5px; font-size: 13px; font-weight: 600; color: #333; }
.password-info { font-size: 11px; color: #999; margin-bottom: 15px; line-height: 1.3; }

/* Cinsiyet Butonları */
.gender-title { font-size: 13px; font-weight: 600; margin-bottom: 8px; }
.gender-btn-group { display: flex; gap: 8px; margin-bottom: 15px; }
.gender-option { flex: 1; padding: 10px; border: 1px solid #ddd; background: #fff; cursor: pointer; border-radius: 4px; font-size: 14px; }
.is-active { border-color: #f27a1a; color: #f27a1a; background-color: #fff5f0; }

/* CHECKBOX DÜZENİ (KAYMALARI GİDEREN KISIM) */
.checkbox-area { display: flex; flex-direction: column; gap: 10px; margin: 15px 0; }
.checkbox-row { display: flex; align-items: flex-start; gap: 12px; }
.checkbox-box { flex-shrink: 0; margin-top: 2px; }
.checkbox-text { font-size: 12px; line-height: 1.5; color: #333; }
.orange-bold { color: #f27a1a; font-weight: 700; text-decoration: none; }

/* reCAPTCHA KUTUSU */
.recaptcha-box-fixed {
  display: flex; justify-content: space-between; align-items: center;
  background: #f9f9f9; border: 1px solid #d3d3d3; padding: 8px 12px; border-radius: 3px; margin: 15px 0;
}
.recaptcha-left { display: flex; align-items: center; gap: 8px; }
.robot-label { font-size: 14px; color: #000; }
.recaptcha-right { text-align: right; }
.captcha-branding p { font-size: 10px; margin: 0; color: #555; font-weight: bold; }
.captcha-links { font-size: 8px; color: #777; }
.captcha-links a { color: #777; text-decoration: none; }

.main-button { width: 100%; height: 45px; background-color: #f27a1a; color: #fff; border: none; border-radius: 4px; font-weight: 700; font-size: 15px; cursor: pointer; }

.password-input-wrapper { position: relative; }
.password-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); opacity: 0.5; }
.password-toggle img { width: 16px; }
</style> 
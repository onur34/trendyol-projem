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

    <GenderSelector v-model="gender" />

    <div class="checkbox-area">
      <BaseCheckbox v-model="isConsented">
        Tarafıma avantajlı tekliflerin sunulabilmesi amacıyla kişisel verilerimin işlenmesine ve paylaşılmasına <a href="#" class="link">açık rıza</a> veriyorum.
      </BaseCheckbox>
      
      <BaseCheckbox v-model="isEmailAccepted">
        Tarafıma elektronik ileti gönderilmesini <a href="#" class="link">kabul ediyorum</a>.
      </BaseCheckbox>

      <BaseCheckbox v-model="isPolicyRead">
        Kişisel verilerimin işlenmesine yönelik <a href="#" class="link">aydınlatma metnini</a> okudum ve anladım.
      </BaseCheckbox>
    </div>

    <div class="recaptcha-box">
        <BaseCheckbox v-model="isNotRobot">
            Ben robot değilim
        </BaseCheckbox>
        <div class="recaptcha-logo-area">
            <p class="recaptcha-logo-placeholder">reCAPTCHA LOGO</p>
            <p class="recaptcha-text">reCAPTCHA <br> <a href="#">Gizlilik</a> - <a href="#">Şartlar</a></p>
        </div>
    </div>

    <BaseButton variant="primary" class="main-button">ÜYE OL</BaseButton>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '@/components/atoms/BaseInput.vue'; 
import BaseButton from '@/components/atoms/BaseButton.vue';
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'; 
// import InputField from '@/components/molecules/InputField.vue'; <-- BU SATIR SİLİNDİ
import GenderSelector from '@/components/molecules/GenderSelector.vue';

// Form verileri (TypeScript)
const email = ref<string>('');
const password = ref<string>('');
const gender = ref<string>('');
const isConsented = ref<boolean>(false);
const isEmailAccepted = ref<boolean>(false);
const isPolicyRead = ref<boolean>(false);
const isNotRobot = ref<boolean>(false);
</script>

<style scoped>
.sign-up-form {
    padding-top: 15px;
}
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
.password-info {
    font-size: 11px;
    color: #999;
    margin-top: 5px;
    margin-bottom: 20px;
}
/* Diğer stiller (checkbox, recaptcha vb.) aynı kaldı */
.checkbox-area {
    margin: 20px 0;
}
.checkbox-area .link {
    color: #ff6000;
    text-decoration: none;
    font-weight: 600;
}
.recaptcha-box {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 20px;
    justify-content: space-between;
}
.recaptcha-logo-area {
    display: flex;
    align-items: center;
    text-align: right;
    font-size: 10px;
}
.recaptcha-logo-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    font-size: 8px;
    margin-right: 5px;
    color: #999;
}
.recaptcha-text a {
    color: #999;
    text-decoration: none;
}
.main-button {
    height: 50px;
    font-size: 16px;
}
/* components/organisms/SignUpForm.vue'ya EKLENECEK CSS */
.password-toggle img {
    /* Login Formu'ndaki ile ayni kuralları burada da uyguluyoruz */
    height: 15px !important; 
    width: 15px !important;
    max-width: 15px;
    max-height: 15px;
    
    display: block; 
    opacity: 0.6;
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
</style> 
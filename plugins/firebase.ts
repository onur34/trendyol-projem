// plugins/firebase.client.ts  <-- ÖNEMLİ: Dosya adını .client.ts yapmanı öneririm
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// BURAYI KENDİ BİLGİLERİNLE DOLDUR:
const firebaseConfig = {
 apiKey: "AIzaSyDZgw7eNqqbH4Ztvs105Aq3pPG7ONypelY",
  authDomain: "trendyol-final-projem.firebaseapp.com",
  projectId: "trendyol-final-projem",
  storageBucket: "trendyol-final-projem.firebasestorage.app",
  messagingSenderId: "219839214838",
  appId: "1:219839214838:web:777d5449efa97fc66d68d7"
};

let app: FirebaseApp;

// Başlatılmış uygulama kontrolü
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const db = getFirestore(app);
export const auth = getAuth(app);

export default defineNuxtPlugin(() => {
    return {
        provide: {
            db,
            auth
        }
    } 
});
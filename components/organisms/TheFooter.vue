<template>
  <footer class="trendyol-footer">
    
    <div v-if="footerData.groups" class="footer-content-wrapper">
      
      <div class="link-columns-group">
        <MoleculesFooterLinkGroup 
            v-if="footerData.groups.Trendyol"
            :title="footerData.groups.Trendyol.title" 
            :links="footerData.groups.Trendyol.links" 
        />
        <MoleculesFooterLinkGroup 
            v-if="footerData.groups.Kampanyalar"
            :title="footerData.groups.Kampanyalar.title" 
            :links="footerData.groups.Kampanyalar.links" 
        />
        <MoleculesFooterLinkGroup 
            v-if="footerData.groups.Satici"
            :title="footerData.groups.Satici.title" 
            :links="footerData.groups.Satici.links" 
        />
        <MoleculesFooterLinkGroup 
            v-if="footerData.groups.Yardim"
            :title="footerData.groups.Yardim.title" 
            :links="footerData.groups.Yardim.links" 
        />
      </div>

      <div class="right-columns-group">
        <h4 class="group-title">Ülke Değiştir</h4>
        <div class="country-select-box">
            Ülke Seç <span class="arrow-icon">></span>
        </div>
        
        <div class="social-icons-placeholder">
            <h4 class="group-title social-title">Sosyal Medya</h4>
            <div class="social-icons social-media-icons">
                <img src="/footer/instagram.jpeg" alt="Instagram" class="social-icon-img" />
                <img src="/footer/X.png" alt="X (Twitter)" class="social-icon-img" />
                <img src="/footer/You Tube.png" alt="YouTube" class="social-icon-img" />
                <img src="/footer/Facebook-ikon.png" alt="Facebook" class="social-icon-img" />
            </div>
        </div>
      </div>
    </div>

    <div class="footer-middle-wrapper">
        
        <div class="security-area">
            <p class="section-title">Güvenlik Sertifikası</p>
            <div class="security-icons">
                <img src="/footer/etbis.webp" alt="ETBİS" class="security-icon" />
                <img src="/footer/ISO-logo.png" alt="ISO Belgesi" class="security-icon" />
                <img src="/footer/pci-dss jpeg.webp" alt="PCI DSS" class="security-icon" />
                <img src="/footer/TR GO.png" alt="TR GO" class="security-icon" />
            </div>
        </div>

        <div class="security-area">
            <p class="section-title">Güvenli Alışveriş</p>
            <div class="security-icons">
                <img src="/footer/Mastercard.jpg" alt="Mastercard" class="security-icon" />
                <img src="/footer/Troy.png" alt="Troy" class="security-icon" />
                <img src="/footer/VISA.png" alt="VISA" class="security-icon" />
                <img src="/footer/american-express.webp" alt="American Express" class="security-icon" />
            </div>
        </div>
        
        <div class="mobile-app-area">
            <p class="section-title">Mobil Uygulamalar</p>
            <div class="app-icons mobile-app-boxes">
                <a href="#" class="app-icon-item dark-box">
                    <img src="/footer/appgallery.png" alt="AppGallery İkonu" class="app-icon-img" />
                    <span class="small-text">HUAWEI</span>
                    <span class="big-text">AppGallery</span>
                </a>

                <a href="#" class="app-icon-item dark-box">
                    <img src="/footer/app store.jpg" alt="App Store İkonu" class="app-icon-img" />
                    <span class="small-text">App Store'dan</span>
                    <span class="big-text">İndirin</span>
                </a>

                <a href="#" class="app-icon-item dark-box">
                    <img src="/footer/google-play.png" alt="Google Play İkonu" class="app-icon-img" />
                    <span class="small-text">Google Play</span>
                    <span class="big-text">DEN ALIN</span>
                </a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>© 2025 trendyol</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// TRENDYOL GÖRSELİNDEKİ TÜM LİNKLER
interface FooterData {
    groups: {
        [key: string]: { title: string; links: string[]; };
    }
}

const footerData = {
    groups: {
        "Trendyol": { title: "Trendyol", links: ["Biz Kimiz", "Kariyer", "Sürdürülebilirlik", "İletişim", "Trendyol'da Güvenlik"] },
        "Kampanyalar": { title: "Kampanyalar", links: ["Kampanyalar", "Alışveriş Kredisi", "Elite Üyelik", "Hediye Fikirleri"] },
        "Satici": { title: "Satıcı", links: ["Trendyol'da Satış Yap", "Temel Kavramlar", "Trendyol Akademi"] },
        "Yardim": { title: "Yardım", links: ["Sıkça Sorulan Sorular", "Canlı Yardım / Asistan", "Nasıl İade Ederim", "İşlem Rehberi"] },
        "UlkeDegistir": { title: "Ülke Değiştir", links: ["Türkiye (Simülasyon)"] }
    }
} as FooterData; 
</script>

<style scoped>
/* YENİ: Başlıklar Turuncu ve Linkler Yan Yana (Hatasız ve Sınırlı CSS) */
.trendyol-footer { background-color: #f7f7f7; padding: 30px 0 0 0; font-family: Arial, sans-serif; color: #333; }

/* TÜM ÜST SÜTUNLAR ARASINDA SABİT BOŞLUK */
.footer-content-wrapper { 
    padding: 40px 20px 0 20px; 
    max-width: 1280px; 
    margin: 0 auto; 
    display: flex; 
    gap: 80px; 
    border-bottom: 1px solid #ddd; 
}
.link-columns-group { display: flex; gap: 50px; }
.right-columns-group { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; }

/* TÜM ÜST BAŞLIKLARIN AYNI BOYUTU */
h4.group-title { 
    font-size: 24px; 
    font-weight: 700; 
    color: #333; 
    margin-bottom: 15px; 
} 

/* ORTA KISIM: GÜVENLİK VE MOBİL UYGULAMALAR */
.footer-middle-wrapper { 
    padding: 30px 20px; 
    display: flex; 
    gap: 80px; 
    border-bottom: 1px solid #ddd; 
    max-width: 1280px; 
    margin: 0 auto; 
}
.security-area { 
    width: auto;
    flex-shrink: 0; 
}
.mobile-app-area {
    flex-shrink: 0;
}

/* Güvenlik/Alışveriş/Mobil Uygulamalar başlıklarının boyutu */
.section-title { font-size: 23px; font-weight: 700; margin-bottom: 5px; color: #333; }
.footer-bottom { max-width: 1280px; margin: 0 auto; padding: 10px 20px; font-size: 12px; color: #999; }

/* GÜVENLİK VE ALIŞVERİŞ İKONLARI İÇİN ORTAK CSS */
.security-icons {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 10px;
    min-height: auto;
    border: none; 
    padding: 0;
}
.security-icon {
    height: 35px; /* İkonların yüksekliği */
    width: auto;
    border: 1px solid #ddd;
    padding: 2px;
    border-radius: 4px;
}

/* SOSYAL MEDYA İKONLARI İÇİN ÖZEL CSS */
.social-media-icons {
    display: flex;
    gap: 15px; 
    margin-top: 10px;
}

.social-icon-img {
    height: 35px; 
    width: 35px; 
    border-radius: 50%; 
    object-fit: cover; 
}

/* MOBİL UYGULAMA KUTULARI İÇİN YENİ CSS (DEĞİŞTİRİLEN KISIM) */
.app-icons.mobile-app-boxes {
    display: flex;
    flex-direction: row; /* Kutuları yan yana diz */
    gap: 10px; /* Her bir uygulama kutusu arasındaki boşluk */
    margin-top: 10px;
}
.app-icon-item {
    display: flex;
    flex-direction: column; /* İkon ve metinleri alt alta diz */
    align-items: flex-start; /* Metinleri sola hizala */
    position: relative; /* İkonu yerleştirmek için */
    padding: 8px 10px;
    border-radius: 6px;
    text-decoration: none; /* Link alt çizgilerini kaldır */
    color: inherit; 
    width: 110px; /* Kutunun sabit genişliği */
    height: 48px; /* Kutunun sabit yüksekliği */
    justify-content: center; /* İçeriği dikeyde ortala */
    box-sizing: border-box;
}

.dark-box {
    background-color: #333; /* Siyah arka plan */
    color: #fff; /* Beyaz metin */
}

.app-icon-img {
    position: absolute; /* İkonu metnin yanına kaydırmak için */
    left: 8px; /* Soldan biraz boşluk */
    height: 25px; 
    width: 25px;
    object-fit: contain;
    /* İkonun yuvarlak kutu içinden taşmasını engellemek için */
    background-color: transparent; 
}
.small-text {
    font-size: 10px;
    line-height: 10px;
    margin-left: 30px; /* İkonun yanına hizala */
}
.big-text {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    margin-left: 30px; /* İkonun yanına hizala */
}


/* DİĞER KÜÇÜK KONTROL CSS'LERİ */
.country-select-box {
    width: 150px; 
    padding: 8px 15px;
    background-color: #e6e6e6; 
    color: #333;
    font-size: 14px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    cursor: pointer;
}
.arrow-icon {
    font-size: 16px;
    color: #333;
}
.group-title {
    margin-top: 20px; 
}
.social-title {
    margin-top: 0; 
}
</style> 
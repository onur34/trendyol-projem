<template>
  <header class="trendyol-header">
    <div class="top-bar-container">
      <div class="top-bar">
        <AtomsAppLogo /> 
        
        <MoleculesSearchInput />
        
        <nav class="icon-nav">
          <AtomsAppIconButton>Giriş Yap</AtomsAppIconButton>
          <AtomsAppIconButton>Favorilerim</AtomsAppIconButton>
          <AtomsAppIconButton>Sepetim</AtomsAppIconButton>
        </nav>
      </div>
    </div>

    <div class="category-bar-container">
        <div class="category-bar">
            <button class="all-categories-btn">TÜM KATEGORİLER <span class="new-badge">YENİ</span></button>

            <span class="category-link">Kadın</span>
            <span class="category-link">Erkek</span>
            <span class="category-link">Anne & Çocuk</span>
            <span class="category-link">Ev & Yaşam</span>
            <span class="category-link">Süpermarket</span>
            <span class="category-link">Kozmetik</span>
            <span class="category-link">Ayakkabı & Çanta</span>
            <span class="category-link">Elektronik</span>
            <span class="category-link">Çok Satanlar <span class="new-badge red">Yeni</span></span>
            <span class="category-link">Flaş Ürünler <span class="new-badge red">Yeni</span></span>
        </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Atom ve Molekül Componentleri otomatik olarak çağrılır.
// TS kuralı için boş olsa bile lang="ts" etiketini kullanıyoruz.
</script>

<style scoped>
/* PAYLAŞTIĞINIZ GÖRÜNTÜYE BİREBİR UYGUN CSS KODLARI */
.trendyol-header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0; /* Alt kısımda ince gri çizgi */
}

/* --- ÜST BAR (LOGO, ARAMA, İKONLAR) --- */
.top-bar-container {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0; /* Kategori barı ile aradaki çizgi */
}
.top-bar {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 30px; /* Logo ve arama çubuğu arasındaki boşluk */
}

/* Arama Alanı Kapsayıcısı (Molekül) */
.search-area {
    flex-grow: 1; /* Arama çubuğunun geniş alana yayılması */
    max-width: 600px;
    height: 40px; /* Kutunun yüksekliğini ayarlama */
    background-color: #f7f7f7; /* Hafif gri arka plan */
    border-radius: 4px;
    display: flex; /* Moleküldeki input ve butonu hizalamak için */
}

/* İkonlar Bölümü */
.icon-nav {
    display: flex;
    gap: 20px;
    align-items: center;
    white-space: nowrap; /* İkon yazılarının alt alta inmesini engeller */
}

/* --- KATEGORİ BAR (ALT BAR) --- */
.category-bar-container {
    padding: 0 0 10px 0; /* Alt kısımda hafif boşluk bırakır */
}
.category-bar {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 20px; /* Kategori linkleri arasındaki boşluk */
    font-size: 13px;
    font-weight: 500;
}
.all-categories-btn {
    background: none;
    border: none;
    font-weight: 600;
    color: #333;
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
}
.category-link {
    white-space: nowrap;
    cursor: pointer;
}

/* Yeni Rozet Stili */
.new-badge {
    background-color: #f27a1a; /* Turuncu (TÜM KATEGORİLER için) */
    color: white;
    font-size: 10px;
    padding: 2px 4px;
    border-radius: 3px;
}
.new-badge.red {
    background-color: #d90000; /* Kırmızı (Çok Satanlar, Flaş Ürünler için) */
}
</style>
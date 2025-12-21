<template>
  <header class="trendyol-header">
    <div class="top-bar-container">
      <div class="top-bar">
        
        <NuxtLink to="/" class="logo-link">
          <AtomsAppLogo /> 
        </NuxtLink>
        
        <MoleculesSearchInput />
        
        <nav class="icon-nav">
          <NuxtLink to="/login" class="nav-item">
            <AtomsAppIconButton>Giriş Yap</AtomsAppIconButton>
          </NuxtLink>

          <NuxtLink to="/favorites" class="nav-item">
            <AtomsAppIconButton>Favorilerim</AtomsAppIconButton>
          </NuxtLink>

          <NuxtLink to="/cart" class="nav-item cart-wrapper">
             <AtomsAppIconButton>Sepetim</AtomsAppIconButton>
             <span class="basket-count">1</span>
          </NuxtLink>
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
// Atom ve Molekül Componentleri otomatik çağrılır.
</script>

<style scoped>
.trendyol-header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}

/* --- ÜST BAR --- */
.top-bar-container {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}
.top-bar {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 30px;
}

/* Logo Link Ayarı (Çizgiyi kaldır) */
.logo-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

/* İkonlar Bölümü */
.icon-nav {
    display: flex;
    gap: 20px;
    align-items: center;
    white-space: nowrap;
}

/* Linklerin varsayılan mavi rengini ve alt çizgisini kaldırıyoruz */
.nav-item {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
}

/* Sepet Sayacı İçin Stil (Turuncu Yuvarlak) */
.cart-wrapper {
    position: relative;
}
.basket-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #f27a1a;
    color: white;
    font-size: 10px;
    font-weight: bold;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

/* --- KATEGORİ BAR --- */
.category-bar-container {
    padding: 0 0 10px 0;
}
.category-bar {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 20px;
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

/* Rozetler */
.new-badge {
    background-color: #f27a1a;
    color: white;
    font-size: 10px;
    padding: 2px 4px;
    border-radius: 3px;
}
.new-badge.red {
    background-color: #d90000;
}
</style>
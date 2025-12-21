<template>
  <div class="auth-layout">
    <slot />
  </div>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  background-color: #fafafa; /* Hafif gri arka plan */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  font-family: 'Arial', sans-serif;
}
</style> 
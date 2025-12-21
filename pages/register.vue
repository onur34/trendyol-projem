<template>
  <div class="auth-page-wrapper">
    <OrganismsLoginForm /> 
  </div>
</template>

<script setup lang="ts">
// Hocanın istediği farklı layout şartı
definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>
.auth-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style> 
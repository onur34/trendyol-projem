<template>
  <div class="default-layout">
    <OrganismsTheHeader />
    
    <main>
      <slot />
    </main>

    <OrganismsTheFooter />
  </div>
</template>

<style>
body { margin: 0; padding: 0; font-family: sans-serif; }
</style> 
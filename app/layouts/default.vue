<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '~/components/layouts/Footer.vue';
import Header from '~/components/layouts/Header.vue';
</script>

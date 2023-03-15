<template>
  <div id="app">
    <NavView />
    <WelcomeView />
    <CryptoView />
    <ShopView />
    <StorageView />
    <ManufactureView />
    <router-view />
  </div>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
</template>

<script>
import NavView from '@/components/NavView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import CryptoView from '@/views/CryptoView.vue';
import ShopView from '@/views/ShopView.vue';
import StorageView from '@/views/StorageView.vue';
import ManufactureView from '@/views/ManufactureView.vue';

export default {
  data: () => ({}),
  components: {
    NavView,
    WelcomeView,
    CryptoView,
    ShopView,
    StorageView,
    ManufactureView,
  },
};
</script>

<style lang="scss">
@import url('assets/style.css');
</style>

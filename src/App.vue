<template>
  <v-layout ref="app" class="rounded rounded-md">
    <AppBar/>
    <MenuBar/>
    <v-main class="d-flex align-center justify-center" height="100%">
      <router-view></router-view>
    </v-main>

    <FooterView/>
  </v-layout>
</template>

<script>
  // import { useLayout } from 'vuetify'
  import AppBar from './components/AppBar.vue';
  import FooterView from './components/FooterBar.vue';
  import MenuBar from './components/MenuBar.vue';

  export default {
    components: { AppBar, FooterView, MenuBar },
  }
</script>
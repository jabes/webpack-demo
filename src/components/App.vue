<template>
  <div class="app">
    <header-component></header-component>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import HeaderComponent from './Header.vue'
  import FooterComponent from './Footer.vue'
  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

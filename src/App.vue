<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
const footer ='footer'
</script>

<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    
    
  </div>
  </div>
  <Footer :class="footer"></Footer>
</template>

<style>

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.footer{
  width: 100%;
  
}

</style>
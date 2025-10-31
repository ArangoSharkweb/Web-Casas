<script setup>
const claseRouterNav = 'nav-link';
const acceso = 'btn btn-primary'
</script>
<template>
  <div class="nav-contenedor">
    <h2 style="color: black">Agencia Inmobiliaria AlKilo</h2>
    <nav class="nav-links">
      <router-link to="/" v-bind:class="claseRouterNav">Inicio</router-link>

      <router-link to="/properties" :class="claseRouterNav">Casas En Venta</router-link>
    </nav>
    <router-link to="/Login" v-bind:class="acceso">Acceder/Registro</router-link>
  </div>
</template>
<style scoped>
.nav-contenedor {
  --general-color: #5b2896;
  --primary-color: #8f44d4;
  --primary-color-dark: #0e7ab0;
  --background-light: #f6f7f8;
  --background-dark: #101c22;
  --surface-light: #ffffff;
  --surface-dark: #1a2930;
  --text-primary-light: #a234ecfa;
  --text-primary-dark: #e2e8f0;
  --text-secondary-light: #4a5568;
  --color-azul: #a234ecfa;
}

.nav-contenedor {
  width: 100%;
  height: 10%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
}
h2{
  font-size: 1.125rem;
  font-weight: 700;
}
.nav-links {
  display: none;
}
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}
.nav-link{
  font-size: 0.875rem!important;
  font-weight: 500!important;
  color: var(--text-primary-light)!important;
  text-decoration: none!important;
  transition: background-color 0.2s ease-in-out!important;
}
.nav-link:hover {
  color: var(--primary-color);
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  border: none;
}
.btn-primary {
  background-color: var(--color-azul);
  color: rgb(214, 214, 214);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
</style>

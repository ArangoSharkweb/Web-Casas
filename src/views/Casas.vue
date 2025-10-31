<script setup>
import { ref } from 'vue'

import FiltroCasa from '@/components/FiltroCasa.vue'
import PropertyCardHomevue from '@/components/PropertyCardHomevue.vue'

const casas = ref([
  {
    id: 1,
    title: 'Casa en La Habana Vieja',
    description: 'Hermosa casa colonial con vista al mar.',
    precio: '500,000',
    image: '/src/assets//images/HabanaVieja.jpg', 
    ubicacion: 'La Habana Vieja',
    habitaciones: 3,
    banos: 2,
    area: '150 m²',
    moneda: 'CUP'
  },
  {
    id: 2,
    title: 'Apartamento en Miramar',
    description: 'Apartamento moderno cerca de la playa.',
    precio: '300,000',
    image: '/src/assets/images/Miramar.jpg',
    ubicacion: 'Miramar',
    habitaciones: 2,
    banos: 1,
    area: '80 m²',
    moneda: 'CUP'
  }
])
 
</script>
<template>
  <div class="header">
    <div class="container mt-4"> 
      <div class="row">
        <aside class="col-12 col-lg-4 mb-4"> 
          <FiltroCasa></FiltroCasa>
        </aside>

        <div class="col-12 col-lg-8"> 
          <div class="row mb-4">
            <div class="col-12">
              <h1 class="h2 fw-bold text-dark mb-1">Propiedades Disponibles</h1>
            </div>
          </div>
          
          <div class="row">
            <div 
              v-for="property in casas" 
              :key="property.id" 
              class="col-12 mb-4" >
              <PropertyCardHomevue :property="property" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
template{
  --primary-color: #1193d4;
  --primary-color-dark: #0e7ab0;
  --background-light: #f6f7f8;
  --background-dark: #101c22;
  --surface-light: #ffffff;
  --surface-dark: #1a2930;
  --text-primary-light: #2d3748;
  --text-primary-dark: #e2e8f0;
  --text-secondary-light: #4a5568;
  --text-secondary-dark: #a0aec0;
  --border-light: #dbe2e6;
  --border-dark: #4a5568;
  --green-accent: #38a169;
  --red-accent: #e53e3e;
}


.header {
  background-color: var(--background-light); /* Para el fondo de toda la página */
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
}


.container {
  max-width: 1200px; 
}
</style>

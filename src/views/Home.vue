<script setup>
import { ref } from 'vue'
import PropertyCardHomevue from '@/components/PropertyCardHomevue.vue';

const casas = ref([
  {
    id: 1,
    title: 'Casa en La Habana Vieja',
    description: 'Hermosa casa colonial con vista al mar y detalles arquitectónicos de época. Totalmente renovada.',
    precio: 500000,
    image:'/src/assets/images/HabanaVieja.jpg',
    ubicacion: 'La Habana Vieja',
    habitaciones: 3,
    banos: 2,
    area: '150 m²',
    moneda: 'CUP'
  },{
    id: 2,
    title: 'Apartamento en Miramar',
    description: 'Apartamento moderno cerca de la playa.',
    precio: '300,000',
    image: '/src/assets//images/Miramar.jpg', 
    ubicacion: 'Miramar',
    habitaciones: 2,
    banos: 1,
    area: '80 m²',
    moneda: 'CUP'
  }

  
])
const verPropiedades = 'router-ver'
</script>


<template>
  <div class="main-content"> <div class="container mt-4"> 
      <div class="row">
        <div class="img-content">
          

        </div>
        
        <aside class="col-12 col-lg-4 mb-4"> 
         
        </aside>

        <div class="col-12 col-lg-8"> 
          <div class="row mb-4">
            <div class="col-12 d-flex justify-content-between align-items-center">
              <h1 class="h2 fw-bold text-dark mb-0">Propiedades Disponibles</h1>
            </div>
          </div>
          
          <div class="row">
            <div 
              v-for="property in casas" 
              :key="property.id" 
              class="col-12 mb-4" 
            >
              <PropertyCardHomevue :property="property" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-12">
          <div class="info-section p-4 p-md-5">
            <h2 class="fw-bold mb-3 text-primary">¿Qué Ofrece Nuestra Agencia Inmobiliaria AlKilo?</h2>
            
            <p>
              Somos tu socio estratégico en el mercado inmobiliario cubano.** En AlKilo, vamos más allá de simplemente listar casas. Actuamos como un puente de confianza entre vendedores y compradores, asegurando que cada transacción sea transparente, rápida y segura. Nuestro equipo de expertos te acompaña en la compra, venta o permuta de tu hogar.
            </p>

            <h3 class="fw-bold mt-4 mb-2">Nuestra Propuesta de Valor:</h3>
            <ul>
              <li>Asesoría Legal Integral: Te guiamos en todo el proceso de la documentación.</li>
              <li>Promoción Premium: Publicamos tu propiedad para alcanzar el mayor número de interesados.</li>
              <li>Transparencia: Manejamos todos los precios y condiciones de forma clara y sin comisiones ocultas.</li>
            </ul>

            <p class="mt-4">
              <small class="text-muted d-block">Explora nuestras ofertas y encuentra tu próximo hogar hoy mismo.</small>
              <RouterLink to="/properties" :class="verPropiedades">Ver Propiedades</RouterLink>
            </p>
          </div>
        </div>
      </div>
      </div>
  </div>
  
  </template>
 
<style scoped>

.main-content{
  --background-light: #f6f7f8;
  --primary-color: #1193d4;
  --surface-light: #ffffff;
}

/* 1. Estilo para el contenedor principal de la página */
.main-content {
  background-color: var(--background-light, #f6f7f8); 
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* 2. Estilo para la nueva sección de información */
.info-section {
  background-color: var(--surface-light, #ffffff);
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Sombra sutil */
  border: 1px solid var(--border-light, #e9ecef);
}

.info-section h2, .info-section h3 {
    color: var(--primary-color, #1193d4);
}

.info-section p {
    line-height: 1.7;
    color: var(--text-secondary-light, #4a5568);
}

.info-section ul {
    list-style-type: none;
    padding-left: 0;
}

.info-section ul li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-primary-light, #2d3748);
}

.info-section ul li::before {
    content: "\2713"; /* Tilde de verificación (Checkmark) */
    color: var(--green-accent, #38a169); /* Color de acento verde */
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
    left: 0;
}
.router-ver{
  color:var(--primary-color);
}
</style>


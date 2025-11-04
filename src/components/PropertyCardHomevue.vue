<script setup>

import { RouterLink } from 'vue-router';
defineProps({
property: {
    type: Object,
    required: true
  }
})



// Función para formatear el precio y añadir 'CUP' o similar
const formatPrice = (price, currency) => {
    return `${price.toLocaleString('es-ES')} ${currency}`;
}
</script>
<template>
  
    <div class="card property-card-vertical border-0 shadow-sm h-100">
      
        
        <div class="property-image-container">
        <img :src="`${property.image}`">
        </div>
        
        <div class="card-body d-flex flex-column p-3">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title fw-bold text-dark mb-0 ">{{property.title }}</h5>
              <span class="fw-bold text-primary fs-6 ms-2">
                {{ formatPrice(property.precio, property.moneda) }}
              </span>
            </div>
            
            <p class="card-text text-muted small mb-2">
              <i class="fas fa-map-marker-alt me-1"></i> 
              {{property.ubicacion }}
            </p>

            <p class="card-text text-mutedproperty-description flex-grow-1">
              {{property.description }}
            </p>
            <div class="property-freatures"></div>
            <div class="d-flex justify-content-start text-muted small ">
              <span class="d-flex align-items-center ">
                <i class="fas fa-bed me-1 text-primary"></i> 
                {{property.habitaciones }} hab.
              </span>
              <span class="d-flex align-items-center">
                <i class="fas fa-bath me-1 text-primary"></i> 
                {{property.banos }} baños
              </span>
              <span class="d-flex align-items-center">
                <i class="fas fa-ruler-combined me-1 text-primary"></i> 
                {{property.area }}
              </span>
            </div>

          </div>
        </div>
   

  
</template>
<style scoped>
/* Contenedor del RouterLink para que toda la tarjeta sea clickable  pd Ahora no funciona*/

.card-link-wrapper {
  text-decoration: none;
  display: block;
  height: 100%;
}

.property-card-vertical {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;}
  .card-link-wrapper:hover .property-card-vertical {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}
.property-image-container {
  height: 200px;
  overflow: hidden;
}

.property-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.1rem;
  line-height: 1.3;
  display: -webkit-box;
  
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.property-description {
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1rem;
}
.property-features {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f1f3f4;
}

/* 📱 Responsive para tarjetas */
@media (max-width: 768px) {
  .property-image-container {
    height: 180px;
  }

.card-title {
    font-size: 1rem;
  }
  
  .property-description {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
}
</style>
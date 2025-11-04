<script setup>

import { RouterLink } from 'vue-router';

defineProps({
  property: {
    type: Object,
    required: true
  }
})
const routerDetallesPath = '/'//por ahora es este xq no lo tengo hecho

// Función para formatear el precio y añadir 'CUP' o similar
const formatPrice = (price, currency) => {
    return `${price.toLocaleString('es-ES')} ${currency}`;
}
</script>
<template>
  <RouterLink :to="routerDetallesPath" class="card-link-wrapper">
    <div class="card property-card-horizontal border-0 shadow-sm">
      <div class="row g-0">
        
        <div class="col-4 col-md-5 property-image-container">
        <img :src="`${property.image}`">
        </div>
        
        <div class="col-8 col-md-7">
          <div class="card-body d-flex flex-column h-100 p-3 p-md-4">

            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title fw-bold text-dark mb-0 text-truncate">{{ property.title }}</h5>
              <span class="fw-bold text-primary fs-5 ms-3">
                {{ formatPrice(property.precio, property.moneda) }}
              </span>
            </div>
            
            <p class="card-text text-muted small mb-3">
              <i class="fas fa-map-marker-alt me-1"></i> 
              {{ property.ubicacion }}
            </p>

            <p class="card-text text-muted property-description flex-grow-1">
              {{ property.description }}
            </p>

            <div class="d-flex justify-content-start text-muted small mt-auto pt-2 features-group">
              <span class="d-flex align-items-center me-3">
                <i class="fas fa-bed me-1 text-primary"></i> 
                {{ property.habitaciones }} hab.
              </span>
              <span class="d-flex align-items-center me-3">
                <i class="fas fa-bath me-1 text-primary"></i> 
                {{ property.banos }} baños
              </span>
              <span class="d-flex align-items-center">
                <i class="fas fa-ruler-combined me-1 text-primary"></i> 
                {{ property.area }}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
/* Contenedor del RouterLink para que toda la tarjeta sea clickable  pd Ahora no funciona*/
.card-link-wrapper {
    text-decoration: none;
    display: block; /* Asegura que ocupe todo el ancho */
    transition: all 0.3s ease;
}

.property-card-horizontal {
  border: 1px solid var(--border-light, #e9ecef); 
  border-radius: 0.75rem; 
  width: 100%;
  overflow: hidden; /* Importante para el radio de borde */
}

.card-link-wrapper:hover .property-card-horizontal {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important; /* Sombra más notable en hover */
}

/* Imagen - Asegura que ocupe la altura completa de la tarjeta */
.property-image-container {
    height: 100%;
}
.card-img-custom {
  height: 100%; 
  width: 100%;
  object-fit: cover;
  min-height: 150px; 
}


.property-description {

  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  min-height: 3rem; /* Altura para 2 líneas */
}

.card-title {
  font-size: 1.25rem; 
  max-width: 70%; /* Limita el ancho del título si el precio es largo */
}

.features-group {
    gap: 1.5rem; /* Espacio entre las características (cama, baño, área) */
}

/* por si se apila la imagen*/
@media (max-width: 767.98px) {
    .card-img-custom {
        border-top-left-radius: 0.75rem !important;
        border-top-right-radius: 0.75rem !important;
        border-bottom-left-radius: 0 !important;
    }
    .property-card-horizontal {
      flex-direction: column; /* Forzar apilamiento vertical */
    }
}
</style>
<script setup>
import PropertyCardHomevue from './PropertyCardHomevue.vue';
const casas = defineProps({
    properties:{
       type:Array,
        required:true,
        default:()=>[]
    }
})
</script>
<template>
<div class="property-grid-container ">
    <div class="grid-header">
      <h2 class="grid-title">Propiedades Disponibles</h2>
    </div>
    <div v-if="casas.properties.length === 0" class="empty-grid-state">
        <h3>No se encontraron propiedades</h3>
        <p>intenta ajustar los filtros de busqueda</p>
    </div>
    

    <div v-else class="properties-grid">
      <PropertyCardHomevue 
        v-for="property in properties" 
        :key="property.id" 
        :property="property"
        class="grid-item"
      />
    </div>
    
    <div v-if="!properties.length === 0" class="no-resultados">
      <h3>No se encontraron propiedades</h3>
      <p>Intenta ajustar los criterios de búsqueda</p>
    </div>
  </div>
</template>
<style scoped>
.properties-grid-container {
  width: 100%;
  padding: 0 1rem;
}

.grid-header {
  margin-bottom: 2rem;
  text-align: center;
}
.grid-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.results-count {
  color: #718096;
  font-size: 1rem;
}
.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.grid-item {
  transition: all 0.3s ease;
  height: 100%;
}

.grid-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
.empty-grid-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #e2e8f0;
}

.empty-grid-content h3 {
  color: #4a5568;
  margin-bottom: 1rem;
}

.empty-grid-content p {
  color: #718096;
}
/*lo que se hace responsive*/ 
@media (max-width: 1200px) {
  .properties-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .properties-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
}
  .properties-grid-container {
    padding: 0 0.5rem;
  }
.grid-title {
    font-size: 1.5rem;
  }

@media (max-width: 480px) {
  .properties-grid {
    grid-template-columns: 1fr; /* Una columna en móviles muy pequeños */
  }
}

</style>

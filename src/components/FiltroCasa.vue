<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  filter: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['manejoFiltro'])
const filtrosLocales = ref({...props.filter
  
})
watch(() => props.filter, (newFilter) => {
  filtrosLocales.value = { ...newFilter }
}, { deep: true })
watch(filtrosLocales,(nuevosFiltros) =>{
    emits('manejoFiltro',{...nuevosFiltros})
}, { deep: true })
const Municipio = ['Plaza de la Revolucion','Regla','Playa','La lisa','Cerro','Miramar']
const resetearFiltros = () => {
  filtrosLocales.value = {
    precioMax: 2000000,
    Municipio: 'Todos Los Municipios',
    baños: 0,
    cuartos: 0,
  }
}

</script>

<template>
<div class="filtro-card">
    <div>
        <h3>Filtros Avanzados</h3>
        <p>Utilice los filtros para refinar su busqueda</p>
    </div>
    <div class="filtro-grupo">
        <label class="filtro-label" for="Municipio">Municipio</label>
        <select class="filter-select input-field" 
                id="Municipio"
                v-model="filtrosLocales.Municipio"> <option value="Todos Los Municipios">Todos los Municipios</option> <option v-for="mun in Municipio" :key="mun" :value="mun">{{mun}}</option>
        </select>
    </div>
    
    <div class="filtro-grupo">
        <label class="filtro-label" for="baños">Número de Baños</label>
        <input class="input-field" 
               type="number" 
               id="baños" 
               min="0" 
               v-model.number="filtrosLocales.baños"> </div>

    <div class="filtro-grupo">
        <label class="filtro-label" for="cuartos">Número de Cuartos</label>
        <input class="input-field" 
               type="number" 
               id="cuartos" 
               min="0" 
               v-model.number="filtrosLocales.cuartos"> </div>


    <div class="filtro-grupo">
        <label class="filtro-label" for="precio">Precio Máximo</label>
        <input :max="filtrosLocales.precioMax"
                    min="100000"
                    step="10000"
                    style="width: 100%"
                    type="range"
                    id="precio"
                    v-model.number="filtrosLocales.precioMax"> </input>
        <div
            style="
                text-align: right;
                font-size: 0.875rem;
                margin-top: 0.25rem;
            "
        >
            Máx: ${{ filtrosLocales.precioMax.toLocaleString('es-ES') }} </div>
    </div>
    
    <div class="filtro-grupo">
        <button class="btn btn-primary w-100 mt-2" v-on:click="resetearFiltros">
            limpiarFiltros
        </button>
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
.filtro-card {
  background-color: var(--surface-light);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--primary-color-dark);
  box-shadow: 0 4px 6px -1px rgba(44, 10, 136, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

}
.filtro-card:hover{
    transform:translateY(1px) ;
}
.filtro-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary-light);
  margin: 0;
}
.filtro-card p {
  font-size: 0.875rem;
  color: var(--text-secondary-light);
  margin: 0.25rem 0 0 0;
}
.filter-select { 
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-light);
  font-size: 0.875rem;
  background-color: var(--surface-light);
}
.filtro-grupo input{
    border: 1px double black;
    border-radius: 0.5rem   ;
}
.filtro-grupo select{
    border: 1px double black;
    border-radius: 0.5rem   ;
}


.btn-primary {
    background-color: var(--primary-color, #1193d4);
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: var(--primary-color-dark, #0e7ab0);
}
</style>
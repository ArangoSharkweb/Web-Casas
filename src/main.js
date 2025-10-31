import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importación CRÍTICA de Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//importacion de la libreria de componentes de vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify(
    {components,directives,}
);
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

console.log('Bootstrap cargado correctamente') // Verificar en consola
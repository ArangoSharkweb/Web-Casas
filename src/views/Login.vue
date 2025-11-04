<script setup>
import FormularioLogin from '@/components/FormularioLogin.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const autenticado = ref(false);
const mensajeError = ref('');
const registroExitoso = ref(false); 

// Base de datos de usuarios
const usuarios = ref([
  {
    id: 1,
    nombre: 'Jorge',
    apellidos: 'Arango',
    email: 'juanitos13@gmail.com',
    password: '12345678',
    cantPublicaciones: 0,
  },
  {
    id: 2,
    nombre: 'Miguel Angel',
    apellidos: 'Jimenez',
    email: 'juanitos14@gmail.com',
    password: '12345678',
    cantPublicaciones: 0,
  },
  {
    id: 3,
    nombre: 'Jorge',
    apellidos: 'Arango',
    email: 'juanitos15@gmail.com',
    password: '12345678',
    cantPublicaciones: 0,
  }
]);

const manejarLogin = (datosLogin) => {
  console.log('Datos recibidos del formulario:', datosLogin);
  
  // Buscar usuario
  const usuarioEncontrado = usuarios.value.find(usuario => 
    usuario.email === datosLogin.email && 
    usuario.password === datosLogin.password
  );

  if (usuarioEncontrado) {
    autenticado.value = true;
    registroExitoso.value = true; 
    mensajeError.value = '';
    
    console.log('Usuario autenticado:', usuarioEncontrado.nombre);
    

  
    setTimeout(() => {
      router.push('/');
    }, 2000);
  } else {
    autenticado.value = false;
    registroExitoso.value = false;
    mensajeError.value = 'Credenciales incorrectas. Verifique su email y contraseña.';
    console.log('Credenciales incorrectas');
  }
}
</script>

<template>
  <div class="login-container">
    <FormularioLogin @submit="manejarLogin" />
    
   
    <div v-if="registroExitoso" class="success-message registro-exitoso">
      <div class="success-icon">✓</div>
      <h3>¡Registro Exitoso!</h3>
      <p>Bienvenido de vuelta a la Agencia AlKilo</p>
      <p class="redirect-message">Redirigiendo a la página principal...</p>
    </div>
    
    <div v-if="mensajeError && !registroExitoso" class="error-message global-error">
      {{ mensajeError }}
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  flex-direction: column;
}

.global-error {
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
}

.error-message {
  background: #ef4444;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.success-message {
  background: #10b981;
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  animation: slideIn 0.5s ease-out;
}

.registro-exitoso {
  background: linear-gradient(135deg, #10b981, #059669);
  border: 2px solid #34d399;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 10px;
  animation: bounce 0.6s ease-in-out;
}

.registro-exitoso h3 {
  margin: 10px 0;
  font-size: 1.5rem;
}

.registro-exitoso p {
  margin: 5px 0;
  opacity: 0.9;
}

.redirect-message {
  font-size: 0.9rem;
  opacity: 0.8;
  font-style: italic;
}

/* Animaciones */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
}
</style>
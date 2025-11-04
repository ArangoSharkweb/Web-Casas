<script setup>
import { reactive, computed, ref } from 'vue';

const emit = defineEmits(['submit'])

const formDatos = reactive({
  email: '',
  password: ''
})

const camposError = reactive({
  email: '',
  password: ''
})


const isLoading = ref(false);

const isSubmitted = ref(false);

const isEmailValid = computed(() => {
  return formDatos.email.includes('@') && formDatos.email.includes('.')
})

const isPasswordValid = computed(() => {
  return formDatos.password.length >= 6
})

const isFormValid = computed(() => {
  return isEmailValid.value && isPasswordValid.value && 
         formDatos.email.length > 0 && formDatos.password.length > 0
})


const buttonText = computed(() => {
  if (isLoading.value) {
    return ' Iniciando Sesión...';
  } else if (isSubmitted.value) {
    return ' Sesión Iniciada';
  } else {
    return ' Iniciar Sesión';
  }
})


const buttonClasses = computed(() => {
  const classes = ['form-boton'];
  if (isLoading.value) classes.push('loading');
  if (isSubmitted.value) classes.push('success');
  if (!isFormValid.value) classes.push('disabled');
  return classes;
})

const validateForm = () => {
  camposError.email = ''
  camposError.password = ''

  let isValid = true

  if (!formDatos.email) {
    camposError.email = 'El email es requerido'
    isValid = false
  } else if (!isEmailValid.value) {
    camposError.email = 'El email no es válido'
    isValid = false
  }

  if (!formDatos.password) {
    camposError.password = 'La contraseña es requerida'
    isValid = false
  } else if (!isPasswordValid.value) {
    camposError.password = 'La contraseña debe tener al menos 6 caracteres'
    isValid = false
  }

  return isValid
}

const manejarUsuario = async () => {
  if (validateForm()) {
  
    isLoading.value = true;
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      
      emit('submit', {
        email: formDatos.email,
        password: formDatos.password
      });
      
    
      isSubmitted.value = true;
      
    
      setTimeout(() => {
        isSubmitted.value = false;
      }, 1500);
      
    } catch (error) {
      console.error('Error en el login:', error);
    } finally {
      
      isLoading.value = false;
    }
  }
}
</script>

<template>
    <div class="container">
        <div class="card-body">
        <div class="card-header">
            <div class="icon"></div>
            <h3>Bienvenido a la Agencia AlKilo</h3>
        </div>
        <form class="form-login" @submit.prevent="manejarUsuario">
            <div class="form-grupo">
            <label for="email" class="form-etiqueta">
                <span class="icon"></span>
                Usuario:
            </label>
                <div class="form-entrada">
            <input 
            type="email" 
            id="email" 
            class="form-input" 
            placeholder="tu @gmail.com"
            v-model="formDatos.email"
            :class="{ 'input-error': camposError.email }"
            :disabled="isLoading">
                </div>
                <span class="error-message" v-if="camposError.email">{{ camposError.email }}</span>
        </div>
            <div class="form-grupo">
            <label for="password" class="form-etiqueta">
                <span class="icon"></span>
                Contraseña:
            </label>
                <div class="form-entrada">
            <input 
            type="password" 
            id="password"
            class="form-input" 
            placeholder="Contraseña" 
            v-model="formDatos.password"
            :class="{ 'input-error': camposError.password }"
            :disabled="isLoading">
            </div>
            <span class="error-message" v-if="camposError.password">{{ camposError.password }}</span>
        </div>
        <div class="form-grupo">
            <button 
            type="submit" 
            :class="buttonClasses"
            :disabled="!isFormValid || isLoading">
            <span class="button-text">{{ buttonText }}</span>
            </button>
            </div>
        </form>
        </div>
    </div>
</template>

<style scoped>
.container {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #3b82f6;
  --secondary-color: #64748b;
  --accent-color: #2cd2d8;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-light: #94a3b8;
  --text-white: #ffffff;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-dark: #0f172a;
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
  --info-color: #3b82f6;
  --border-color: #e2e8f0;
  --border-radius: 12px;
  --border-radius-sm: 8px;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
}

/* Contenedor principal */
.container{
  width: 100%;
  max-width: 440px;
  margin-top: 50px;
}

.card-body {
  background: var(--bg-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-xl);
  padding: var(--space-2xl);
  position: relative;
  overflow: hidden;
  transition: var(--transition);
}

.card-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
}

.card-body:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Header */
.card-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  color: var(--primary-color);
  font-size: 2rem;
}

.form-login{
    width: 100%;
}

.form-etiqueta{
    display: block;
    width: 100%;
    margin-bottom: var(--space-sm);
    font-weight: 500;
    color: var(--text-primary);
}

.form-entrada {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: var(--space-sm);
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  transition: var(--transition);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  transform: translateY(-1px);
}

.form-input::placeholder {
  color: var(--text-light);
}

.form-input:disabled {
  background-color: var(--bg-secondary);
  cursor: not-allowed;
  opacity: 0.7;
}

.input-error {
  border-color: var(--error-color) !important;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

/** Botón del login - MEJORADO */
.form-boton {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--text-white);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  margin-top: var(--space-xl);
}

/* Estado normal del botón */
.form-boton:hover:not(.disabled):not(.loading):not(.success) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

/* Estado de loading */
.form-boton.loading {
  background: linear-gradient(135deg, var(--warning-color), #fbbf24);
  cursor: wait;
  transform: none;
}

.form-boton.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: loading-shimmer 1.5s infinite;
}

/* Estado de éxito */
.form-boton.success {
  background: linear-gradient(135deg, var(--success-color), #34d399);
  cursor: default;
  transform: none;
  animation: success-pulse 0.6s ease-in-out;
}

/* Estado deshabilitado */
.form-boton.disabled {
  background: var(--text-light);
  cursor: not-allowed;
  transform: none;
  opacity: 0.6;
}

.button-text {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  transition: var(--transition);
}

/* Animaciones */
@keyframes loading-shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes success-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Efecto de pulso continuo para éxito */
.form-boton.success {
  animation: success-pulse 0.6s ease-in-out, continuous-pulse 2s infinite;
}

@keyframes continuous-pulse {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 4px 25px rgba(16, 185, 129, 0.8);
  }
}
</style>
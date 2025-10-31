<script setup>
</script>
<template>
    <div class="container">
        <div class="card-body">
        <div class="card-header">
            <div class="icon"><!--aqui va el logo--></div>
            <h3>Bienvenido a la Agencia AlKilo</h3>
        </div>
        <form class="form-login">
            <div class="form-grupo">
            <label for="email" class="form-etiqueta">
                <span class="icon"><!--aqui voy a poner el icono de gmail--></span>
                Usuario:</label>
                <div class="form-entrada" >
            <input type="email" id="email" class="form-entrada" placeholder="tu @gmail.com"></input>
                </div>
        </div>
            <div class="form-grupo">
            <label for="password" class="form-etiqueta">
                <span class="icon"><!--aqui tambien voy a poner el icono de contra--></span>
                Contraseña:</label>
                <div class="form-entrada">
            <input type="password" class="form-entrada" placeholder="Contraseña"></input>
            </div>
        </div>
        <div class="form-grupo">
            <button type="submit" class="form-boton" >Iniciar</button>
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
  min-height: 600px;
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
}
.form-login{
    width: 100%;
}
.form-etiqueta{
    display: block;
    width: 100%;
}
.form-entrada div{
    position: relative;
  display: flex;
  align-items: center;
    
}
.form-entrada input{
    width: 100%;
  padding: 14px 16px 14px 48px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  transition: var(--transition);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
}
.form-entrada input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  transform: translateY(-1px);
}

.form-input input::placeholder {
  color: var(--text-light);
}
.form-entrada{
    border-color: var(--error-color);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/**boton del login */
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
  margin-bottom: var(--space-xl);
  margin-top: var(--space-xl);
}
.form-boton:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

.form-boton:disabled {
  background: var(--text-light);
  cursor: not-allowed;
  transform: none;
}

.form-boton.loading {
  pointer-events: none;
}

</style>
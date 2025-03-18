import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';  // IMPORTANTE: agregar esta línea

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],  // Asegúrate de que tailwindcss esté incluido aquí
  server: {
    host: '0.0.0.0',  // Esto permitirá conexiones desde cualquier IP
    port: 3000, // Puedes elegir el puerto que prefieras
  }
});

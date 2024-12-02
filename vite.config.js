import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import "leaflet/dist/leaflet.css";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})

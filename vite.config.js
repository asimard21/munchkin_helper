import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/munchkin_helper',
  plugins: [react()],
  resolve: {
  alias: {
    'assets/svg': 'src/assets/svg'
  },  
  },
})

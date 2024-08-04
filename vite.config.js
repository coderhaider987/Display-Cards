import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/display-cards/', // replace 'my-app' with your repository name  
  plugins: [react()],
});
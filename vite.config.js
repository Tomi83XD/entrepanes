import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  sserver: {
  watch: {
    usePolling: true,
    interval: 100,
  },
}

});

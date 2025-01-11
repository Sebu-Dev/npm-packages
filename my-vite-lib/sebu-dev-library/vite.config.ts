import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx',  
      name: 'sebu-dev-library', 
      fileName: (format) => `my-library.${format}.js`, 
    },
    rollupOptions: {
      external: ['react', 'react-dom'], 
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

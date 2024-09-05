import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Default root is the project root
  build: {
    rollupOptions: {
      input: {
        main: './card.html'
      }
    }
  },
  server: {
    open: './card.html', // Automatically open card.html in the browser
  }
});

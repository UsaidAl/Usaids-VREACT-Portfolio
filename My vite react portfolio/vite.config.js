import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null; // Ignore non-src .js files
        // Use the exposed transform from Vite, instead of directly transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx', // Treat .js files as JSX
          jsx: 'automatic', // Specify JSX mode (automatic or classic)
        });
      },
    },
    react(), // Add the React plugin
  ],
  // Other Vite configuration options...
});
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: '/what-week/',
  plugins: [viteSingleFile()],
  build: {
    minify: 'esbuild'
  }
});

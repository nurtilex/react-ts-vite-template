import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '01-app': `${path.resolve(__dirname, './src/01-app')}`,
      '02-pages': `${path.resolve(__dirname, './src/02-pages')}`,
      '03-widgets': `${path.resolve(__dirname, './src/03-widgets')}`,
      '04-features': `${path.resolve(__dirname, './src/04-features')}`,
      '05-entities': `${path.resolve(__dirname, './src/05-entities')}`,
      '06-shared': `${path.resolve(__dirname, './src/06-shared')}`,
    },
  },
});

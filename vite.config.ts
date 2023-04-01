/// <reference types="vitest" />

import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],

  resolve: {
    //@ts-ignore
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/global') }]
  },

  test: {
    environment: 'jsdom'
  }
});

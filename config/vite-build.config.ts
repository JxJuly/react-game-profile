import react from '@vitejs/plugin-react';

import pkg from '../package.json';

import type { UserConfig } from 'vite';
const config: UserConfig = {
  build: {
    lib: {
      entry: {
        psn: './src/psn/index.ts',
      },
      formats: ['es'],
    },
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      external: Object.keys(pkg.dependencies).concat(['react', 'react/jsx-runtime']),
      output: {
        entryFileNames: '[name]/index.js',
        assetFileNames: '[name]/[name][extname]',
      },
    },
    outDir: './dist',
  },
  plugins: [react()],
};

export default config;

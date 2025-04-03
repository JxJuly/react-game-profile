import react from '@vitejs/plugin-react';
import ts from 'typescript';
import dts from 'vite-plugin-dts';

import pkg from '../package.json';

import type { UserConfig } from 'vite';
const config: UserConfig = {
  build: {
    lib: {
      entry: {
        main: './src/index.ts',
        psn: './src/psn/index.ts',
        steam: './src/steam/index.ts',
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
    outDir: './lib',
  },
  plugins: [
    dts({
      compilerOptions: {
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        jsx: ts.JsxEmit.ReactJSX,
      },
      entryRoot: './src',
      outDir: './lib/types',
    }),
    react(),
  ],
};

export default config;

import react from '@vitejs/plugin-react';

import type { UserConfig } from 'vite';

const config: UserConfig = {
  root: './example',
  mode: 'development',
  plugins: [react()],
};

export default config;

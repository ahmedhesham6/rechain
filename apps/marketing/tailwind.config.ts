import type { Config } from 'tailwindcss';

import { rechainTailwindPreset } from '@rechain/tailwind';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,astro}',
    '../../packages/ui/dist/**/*.js',
  ],
  darkMode: 'class',
  presets: [rechainTailwindPreset],
};

export default config;

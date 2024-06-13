import type { Config } from 'tailwindcss';

import { withUt } from 'uploadthing/tw';

import { rechainTailwindPreset } from '@rechain/tailwind';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/dist/**/*.js'],
  darkMode: 'class',
  presets: [rechainTailwindPreset],
};

export default withUt(config);

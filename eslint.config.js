import { configs, defineConfig } from '@rechain/eslint';

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },

  ...configs.base,

  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

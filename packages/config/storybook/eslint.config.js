import { configs, defineConfig } from '@rechain/eslint';

export default defineConfig(
  ...configs.base,
  ...configs.react,
  ...configs.storybook,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

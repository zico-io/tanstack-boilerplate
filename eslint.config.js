import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { configs } from '@tanstack/eslint-plugin-query'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      query: configs.recommended,
    },
    rules: {
      '@typescript-eslint/only-throw-error': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
)

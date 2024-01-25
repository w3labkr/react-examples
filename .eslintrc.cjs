/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // No default export found in imported module "react-dom/client".
    'import/default': 'off',
    // Using exported name ... as identifier for default export.
    'import/no-named-as-default': 'off',
    // Unexpected any. Specify a different type.
    '@typescript-eslint/no-explicit-any': 'off',
    // Unable to resolve path to module ...
    'import/no-unresolved': 'warn',
    // ... is defined but never used.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  ignorePatterns: [
    'dist',
    'src/components/ui',
    '.eslintrc.cjs',
    'vite.config.ts',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}

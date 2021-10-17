// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  ignorePatterns: ['node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    node: true,
    jest: true,
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:promise/recommended',
    'plugin:node/recommended-module',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  rules: {
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        resolvePaths: ['node_modules/@types'],
        tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
      },
    ],
  },
  globals: {},
};

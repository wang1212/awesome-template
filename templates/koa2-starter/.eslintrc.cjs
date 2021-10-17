// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  ignorePatterns: ['node_modules'],
  parserOptions: {
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
    'plugin:promise/recommended',
    'plugin:node/recommended-module',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {},
  globals: {},
};

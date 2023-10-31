module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
  },
};

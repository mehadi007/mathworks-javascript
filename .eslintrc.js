module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  extends: ['standard'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-const': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { named: 'never' }],
  },
  ignorePatterns: ['node_modules'],
};

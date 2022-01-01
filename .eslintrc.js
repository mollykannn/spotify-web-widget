module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'vue-eslint-parser',

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-default-prop': 'off',
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
}

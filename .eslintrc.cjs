/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    'no-console':process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names':'off',  //组件名不需要多个单词
    'no-undef':'off'  //忽略未定义的报错
  }
}

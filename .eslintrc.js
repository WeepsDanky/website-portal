module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react/no-unescaped-entities': 'off', // Disables the 'react/no-unescaped-entities' rule
    '@next/next/no-page-custom-font': 'off', // Disables the '@next/next/no-page-custom-font' rule
    'no-unused-vars': 'off' // Disables the 'no-unused-vars' rule
  },
  globals: {
    React: true
  }
}

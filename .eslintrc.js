module.exports = {
  env: {
    //指定代码的运行环境
    browser: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/display-name': 0,
    'react/prop-types': [0, 'off'],
    '@typescript-eslint/no-explicit-any': 0,
    'no-undef': 0,
    '@typescript-eslint/no-var-requires': 'off'
  },
  settings: {
    react: {
      version: 'latest'
    }
  }
};

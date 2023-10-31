module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  ignorePatterns: [
    'dist',
    'tsconfig.json',
    'tsconfig.eslint.json',
    '.eslintrc.js'
  ],
  extends: [
    'standard-with-typescript'
  ]
}

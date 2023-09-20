module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  },
  // Inkluder p5.js-filer fra node_modules
  include: ['node_modules/p5/lib/**/*.js']
}

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  globals: {
    Promise: true,
    require: true,
    describe: true,
    it: true,
    console: true,
    done: true
  },
  rules: {
    'no-console': [
      'off'
    ]
  }
};

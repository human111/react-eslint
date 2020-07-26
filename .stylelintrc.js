module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  ignoreFiles: [
    'node_modules/**',
    '**/*.md',
    '**/*.js',
    // 'src/assets/font/**',
    // 'src/assets/style/reset.css'
  ],
  rules: {
    'color-hex-case': null,
    'number-leading-zero': null,
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': ['extends', 'ignores', 'include', 'mixin', 'if', 'else', 'media', 'for']
    }],
    'no-descending-specificity': null,
    'indentation': [2, {
      baseIndentLevel: 1
    }]
  }
}
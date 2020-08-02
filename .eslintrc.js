const path = require('path')
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect',
      pragma: 'React'
    },
    // 解决ts中import/no-unresolved错误提示，可以参考eslint-plugin-import官方文档
    "import/resolver": {
        "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: 'babel-eslint', // 词法解析器使用babel-eslint，以更好的适配es6的新api
    ecmaFeatures: {
        'jsx': true,
        'tsx': true
    },
    ecmaVersion: 6, // 启用 ES6 语法支持;默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。
    sourceType: 'module',
    project: './tsconfig.json',
    useJSXTextNode: true,
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  // 可以在这里覆盖react的规则
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  }
}

const path = require('path')
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jquery: true
  },
  parser: "@typescript-eslint/parser", // 将 TypeScript 转换为 ESTree，使 eslint 可以识别
  // extend 提供的是 eslint 现有规则的一系列预设
  extends: [
    // 'airbnb',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  //  plugin 则提供了除预设之外的自定义规则，当你在 eslint 的规则里找不到合适的的时候就可以借用插件来实现了
  plugins: [
    'react',
    '@typescript-eslint' // 只是一个可以打开或关闭的规则列表
  ],
  settings: {
    react: { // 自动发现React的版本，从而进行规范react代码
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
  parserOptions: {
    parser: 'babel-eslint', // 词法解析器使用babel-eslint，以更好的适配es6的新api
    // 指定ESLint可以解析JSX语法
    ecmaFeatures: {
        'jsx': true,
        'tsx': true
    },
    ecmaVersion: 6, // 启用 ES6 语法支持;默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。
    sourceType: 'module',
    project: './tsconfig.json',
    useJSXTextNode: true,
  },
  // 可以在这里覆盖react的规则
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/sort-comp': [
      2,
      {
        order: ['static-methods', 'static-variables', 'instance-variables', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    // '@typescript-eslint/no-unused-vars': 'error'
  }
}

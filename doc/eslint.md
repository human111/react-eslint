# eslint学习总结

1、要在command+s(保存)的时候让.md的文件自动格式化。你需要下载markdownlint和Markdown All in One这两插件，同时更改本地vscode的setting.json文件，添加上这段代码：

```json
"editor.codeActionsOnSave": {
  "source.fixAll.markdownlint": true,
}
```

## Eslint：主要用来代码规范的检查

> 简介：[ESLint](http://eslint.cn/) 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于 2013 年 6 月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。

它的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。因此可配置、插件式是 ESLint 的最大特点。

- eslint中所有的规则都被设计成可拔插的
- 每个规则都是各自独立的，都可以被单独配置（也就是规则的关闭和开启）
- eslint并不推荐编程风格，编程风格是prettier做的事。它主要配合这些代码规范，检测出代码潜在问题，从而提高代码质量。

### 使用eslint，当然要编辑配置文件。Eslint支持的几种配置文件

- JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
- YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml去定义配置的结构。
- JSON - 使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- package.json - 在 package.json 里创建一个 eslintConfig 属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：
.eslintrc.js > .eslintrc.yaml > .eslintrc.json > package.json

## 玩转Eslint配置

两种配置方式：

- 直接使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。eg: // eslint-disable-line no-alert
- 使用JavaScript配置文件。eg: .eslintrc.js

### 接下来我们主要讲解配置文件

- 解析器选项（parserOptions）：它允许你指定你想要支持的 JavaScript 语言选项，如：es6

  ```JSON
  parserOptions: {
    parser: 'babel-eslint', // 词法解析器使用babel-eslint，以更好的适配es6的新api
    // 指定ESLint可以解析JSX和TSX语法
    ecmaFeatures: {
        'jsx': true,
        'tsx': true
    },
    ecmaVersion: 6, // 启用 ES6 语法支持;默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。
    sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    project: './tsconfig.json',
    useJSXTextNode: true,
  }
  ```

- 解析器（parser）：默认使用[Espree](https://github.com/eslint/espree)作为其解析器，你可以在配置文件中指定一个不同的解析器。像我们项目使用的是ts，因此需要使用@typescript-eslint/parser - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。

  ```JSON
  parser: "@typescript-eslint/parser", // 将 TypeScript 转换为 ESTree，使 eslint 可以识别
  ```

- 环境的定义（env）：一个环境定义了一组预定义的全局变量。

  ```JSON
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性
    commonjs: true, // CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
    node: true // Node.js 全局变量和 Node.js 作用域
  }
  ```

- 全局变量（globals）：当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。

  ```JSON
  globals: {
    Vue: true,
    Navigation: true,
    Context: true,
    Tool: true,
    gio: true,
    sensors: true
  }
  ```

- 插件（plugins）：在使用插件之前，你必须使用 npm 安装它。在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。

  ```JSON
  //  plugin 则提供了除预设之外的自定义规则，当你在 eslint 的规则里找不到合适的的时候就可以借用插件来实现了
  plugins: [
    'react',
  ]
  ```

- 规则（rules）：你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
  - "off" 或 0 - 关闭规则
  - "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  - "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

  ```JSON
  //  这里你可以自定义修改检测规则
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    indent: 'off',
    camelcase: 'off', // 不强制变量名使用驼峰格式
    ...
  }
  ```

- 扩展配置（extends）：一个配置文件可以被基础配置中的已启用的规则继承，它提供的是 eslint 现有规则的一系列自定义预设。

  ```JSON
  extends: [
    // 'airbnb',
    'eslint:recommended',
    'plugin:import/typescript',
    // 'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ]
  ```

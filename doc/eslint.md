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

### 接下来我们主要讲解配置文件的属性

- 解析器选项（parserOptions）：它允许你指定你想要支持的 JavaScript 语言选项，如：es6

  ```JSON
  parserOptions: {
    "parser": "babel-eslint", // 词法解析器使用babel-eslint，以更好的适配es6的新api
    // 使用的额外的语言特性，比如指定ESLint可以解析JSX和TSX语法
    "ecmaFeatures": {
        "jsx": true, // 配合使用的依赖eslint-plugin-react
        "tsx": true
    },
    // 启用 ES6 语法支持;默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。
    "ecmaVersion": 6, // 它不自动启用es6全局变量，如Set、Map。如果自动启用es6语法，{ "env":{ "es6": true } }。
    "sourceType": "module", // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    "project": "./tsconfig.json",
    "useJSXTextNode": true,
  }
  ```

- 解析器（parser）：默认使用[Espree](https://github.com/eslint/espree)作为其解析器，你可以在配置文件中指定一个不同的解析器。像我们项目使用的是ts，因此需要使用@typescript-eslint/parser - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。

  ```JSON
  parser: "@typescript-eslint/parser", // 将 TypeScript 转换为 ESTree，使 eslint 可以识别。也可以使用babel-eslint
  ```

- 环境的定义（env）：一个环境定义了一组预定义的全局变量。

  ```JSON
  env: {
    "browser": true, // 浏览器环境中的全局变量
    "es6": true, // 启用除了 modules 以外的所有 ECMAScript 6 特性
    "commonjs": true, // CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
    "node": true // Node.js 全局变量和 Node.js 作用域
  }

  // 如果你使用自己定义的环境变量，可以这样写。注意需要plugins和env配合使用，
  plugins: ["example"], // 插件中添加你的插件名
  env: {
      "example/custom": true // 环境中添加你的插件名后跟一个/ ，紧随着环境名
  }
  ```

- 全局变量（globals）：当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。当我们使用第三方提供的全局变量的时候（例如：jQuery,Vue 等对象），ESLint 并不能识别他们，总是会报错。这个时候，该配置的作用就出现了。使用 globals 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写（这样 ESLint 就不会发出警告了），或 false 将不允许被重写。

  ```JSON
  globals: {
    "Vue": true,
    "Navigation": true,
    "Context": true,
    "Tool": true,
    "gio": true,
    "jQuery": true,
    "sensors": true
  }
  ```

- 插件（plugins）：在使用插件之前，你必须使用 npm 安装它。在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。

  [npm上的Eslint插件](https://www.npmjs.com/search?q=keywords:eslintplugin)

  ```JSON
  //  plugin 则提供了除预设之外的自定义规则，当你在 eslint 的规则里找不到合适的的时候就可以借用插件来实现了
  plugins: [
    "react",
  ]
  ```

- 规则（rules）：你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
  - "off" 或 0 - 关闭规则
  - "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  - "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  - rules（rules中定义个别规则，可覆盖掉”extends”中引入的规则）属性下面的扩展或覆盖规则：
    - 改变继承的规则级别而不改变它的选项：
      - 基础配置："eqeqeq": ["error", "allow-null"]
      - 派生的配置："eqeqeq": "warn"
      - 最后生成的配置："eqeqeq": ["warn", "allow-null"]
    - 覆盖基础配置中的规则的选项
      - 基础配置："quotes": ["error", "single", "avoid-escape"]
      - 派生的配置："quotes": ["error", "single"]
      - 最后生成的配置："quotes": ["error", "single"]

  ```JSON
  //  这里你可以自定义修改检测规则
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": "off",
    "camelcase": "off", // 不强制变量名使用驼峰格式
    ...
  }
  ```

- 扩展配置（extends）：一个配置文件可以被基础配置中的已启用的规则继承，它提供的是 eslint 现有规则的一系列自定义预设，也可以理解成规则（rules）的继承。它的属性值可以省略包名的前缀 eslint-config-

  一个配置文件可以被基础配置中的已启用的规则继承,通俗的来说，就是我们可以新建一个像eslintrc.base.js的配置文件，里面只是写了一下基础的rules规则。例如：
  
  ```js
  module.exports = {
    root: true,
    rules: {
      'no-console': 'warn', // 禁止使用console
      'class-methods-use-this': 'off', // 类的实例方法可以不用this
    }
  }
  ```

  然后在另一个.eslintrc.js文件中引入该文件路径

  ```JSON
  // 指定配置的字符串(配置文件的路径、可共享配置的名称, 例如：eslint:recommended，或者./eslintrc.base.js)
  // 字符串数组：每个配置继承它前面的配置
  extends: [
    "./eslintrc.base.js",
    // 'airbnb',
    "eslint:recommended",
    "plugin:import/typescript",
    // "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ]
  ```

- 共享设置（settings）：可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则

  ```JSON
  settings: {
    "react": { // 自动发现React的版本，从而进行规范react代码
      "version": "detect",
      "pragma": "React"
    },
    // 解决ts中import/no-unresolved错误提示，可以参考eslint-plugin-import官方文档
    "import/resolver": {
        "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
    }
  }
  ```

## .eslintignore

你可以通过在项目根目录创建一个 .eslintignore 文件告诉 ESLint 去忽略特定的文件和目录。.eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测

  ```text
    /*.js
    build
    config/
    scripts/
    node_modules/
    dist
  ```

当 ESLint 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 .eslintignore 文件。如果发现了这个文件，当遍历目录时，将会应用这些偏好设置。一次只有一个 .eslintignore 文件会被使用，所以，不是当前工作目录下的 .eslintignore 文件将不会被用到。

## eslintrc.js中rules的常用配置解释

[Eslint规则表](https://cn.eslint.org/docs/rules/)

  ```JSON
  rules: {
    // 禁止使用console
    "no-console": "warn",
    // 类的实例方法可以不用this
    "class-methods-use-this": "off",
    // 考虑到 语义性 和 可扩展行 方面，允许 if 作为唯一语句出现在 else 代码块中
    "no-lonely-if": "off",
    // 考虑到允许对 语义性 和 简化代码逻辑思考 带来的好处，允许在 esle 前有 return
    "no-else-return": "off",
    // 考虑到 for 循环的编码习惯，以及在 for 循环末尾使用 ++ 不会产生空格带来的语义性问题，故允许
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    // 要求 import/first, 但是不要求绝对路径的依赖位于前方（关闭"absolute-first"）
    "import/first": "error",
    // 有时确实需要在循环中写 await
    "no-await-in-loop": "off",
    // 还是会用到 hasOwnProperty
    "no-prototype-builtins": "off",
    // 考虑到某些时候确实没有 default case, 强制写也是冗余
    "default-case": "warn",
    // foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
    "no-eq-null": "off",
    // 考虑到 按需加载功能，关闭全局 require 要求
    "global-require": "off",
    // 参数重新赋值有些是逻辑正常需求
    "no-param-reassign": "off",
    // case 中可能会进行一些逻辑处理，声明写临时变量
    "no-case-declarations": "off",
    // 要求过于严格
    "prefer-destructuring": "off",
    // 标识符允许使用下划线
    "no-underscore-dangle": "off",
    // 使用4个空格缩进
    "indent": ["error", 4, { "SwitchCase": 1 }],
    // 考虑到大数量的数组的书写需要，允许一行包含多个元素
    "array-element-newline": "off",
    // 函数内条件的数量
    "complexity": "off",
    // 函数最多可包含表达式的数量
    "max-statements": "off",
    // 最大语句嵌套的深度
    "max-depth": "off",
    // 最大函数嵌套的深度
    "max-nested-callbacks": "off",
    // 函数参数最大数量
    "max-params": "off",
    // 行最大长度
    "max-len": "off",
    // 文件行数需要根据实际情况考量
    "max-lines": "off",
    // 没必要限制函数必须有名字
    "func-names": "off",
    // 链式调用没必要强制换行
    "newline-per-chained-call": "off",
  }
  ```

## [Pre-commit](https://gist.github.com/dahjelle/8ddedf0aebd488208a9a7c829f19b9e8#file-pre-commit-sh)

  ```sh
    // pre-commit.sh
    #!/bin/bash

    for file in $(git diff --cached --name-only | grep -E '\.(js|jsx)$')
    do
      git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file" # we only want to lint the staged changes, not any un-staged changes
      if [ $? -ne 0 ]; then
        echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint."
        exit 1 # exit with failure status
      fi
    done  
  ```

## MISC(杂记)

- [Eslint demo Exercise](https://cn.eslint.org/demo/)
- 结合webpack使用时，可以用eslint-loader

  ```js
  {
    "test": /\.(js|vue)$/,
    "loader": "eslint-loader",
    "enforce": "pre",
    "include": resolve('src'),
    "options": {
      "formatter": require('eslint-friendly-formatter'),
      "emitWarning": false, // eslint errors and warnings will also be shown in the error overlay
      "fix": false
    }
  }
  ```

- 比如eslint和prettier产生冲突时

  ```js
  // .eslintrc.js中rules的配置
  "quotes": ["error", "single"], // 强制使用单引号
  "semi": ["error", "never"] // 强制不使用分号结尾

  // .prettierrc.js中的配置
  "prettier.eslintIntegration": true, // 开启 eslint 支持
  "prettier.singleQuote": true, // 使用单引号
  "prettier.semi": false // 结尾不加分号
  ```

## 待学习的

- TODO：eslint插件怎么开发

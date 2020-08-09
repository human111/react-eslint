# prettier学习总结

> Prettier 是一个代码格式化工具。能够按照我们的规则，将我们的代码格式化
为什么我们用它，而不用其他的代码格式化工具呢？Prettier 主要有以下优点：

- 可配置化
- 支持多种语言
- 集成多数的编辑器
- 简洁的配置项

## Eslint+Prettier

1. 安装Eslint、Prettier包，安装命令npm install eslint prettier -D
2. 将其整合起来那么我们需要已写好的“共享配置包”和插件。因此我们需要下载eslint-plugin-prettier，eslint-config-prettier两个包，安装命令npm install eslint-plugin-prettier eslint-config-prettier -D
   1. prettier: 格式化规则程序
   2. eslint-config-prettier: 将禁用任何可能干扰现有 prettier 规则的 linting 规则
   3. eslint-plugin-prettier: 将作为ESlint 的一部分运行 Prettier分析。
3. 建立配置文件.eslintrc.js，主要是ts的检测和对应的prettier

   ```JSON
    extends: [
      "eslint:recommended",
      "plugin:import/typescript",
      "plugin:@typescript-eslint/eslint-recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error"
    },
4. 配置完了，但要在保存的时候自动格式化，还需要做一些处理。打开VScode的配置文件，增加以下配置：

  ```JSON
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "react"
    ],
    "eslint.options": {    //指定vscode的eslint所处理的文件的后缀
      "extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx"
      ]
    },
    // 保存时自动格式化成prettier风格，vscode的默认的代码格式化ctrl+shift+f,在Mac上可以修改成command+s。
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true,
      "source.fixAll.markdownlint": true,
    },
  ```

## prettier冲突问题

你是否通过ESLint来运行Prettier，又或者是单独运行两个工具，那你大概只想要每个格式问题只出现一次，而且你特别不想要ESLint仅仅是和Prettier有简单的不同和偏好而报出“问题”。

所以你大概想要禁用冲突的规则（当保留其他Prettier不关心的规则时）最简单的方式是使用eslint-config-prettier。它可以添加到任何ESLint配置上面。

## prettier常见的配置

  ```JSON
    /*  prettier的配置 */
    "prettier.printWidth": 100, // 超过最大值换行
    "prettier.tabWidth": 4, // 缩进字节数
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "prettier.semi": true, // 句尾添加分号
    "prettier.singleQuote": true, // 使用单引号代替双引号
    "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
    "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
    "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
    "prettier.htmlWhitespaceSensitivity": "ignore",
    "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
    "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
    "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
    "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
    "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
    "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    "prettier.tslintIntegration": false // 不让prettier使用tslint的代码格式进行校验
  }
  ```

## 参考文章

- [ESlint](https://eslint.bootcss.com/docs/user-guide/configuring#specifying-parser-options)
- [Prettier](https://prettier.io/docs/en/index.html)
- [eslint 与 prettier 实现代码规范自动格式化](https://www.cnblogs.com/ssaylo/p/12806757.html)
- [使用ESLint+Prettier规范React+Typescript项目](https://zhuanlan.zhihu.com/p/62401626?from_voters_page=true)
- [Prettier格式化配置](https://www.cnblogs.com/oneweek/p/11236515.html)

# stylelint学习总结

## 涉及到的库

- prettier // 保存自动格式化
- stylelint // css规则检测
- stylelint-config-prettier // css保存自动格式化
- stylelint-config-recess-order // css语法顺序
- stylelint-config-sass-guidelines // 配合使用scss的配置
- stylelint-config-standard // css推荐的格式规则
- stylelint-order // css语法顺序
- stylelint-prettier // css保存自动格式化

> css顺序校验需要添加stylelint-order插件，同时使用stylelint-config-recess-order预设.

### css语法顺序

1. 定位属性：position  display  float  left  top  right  bottom   overflow  clear   z-index
2. 自身属性：width  height  padding  border  margin   background
3. 文字样式：font-family   font-size   font-style   font-weight   font-varient   color
4. 文本属性：text-align   vertical-align   text-wrap   text-transform   text-indent    text-decoration   letter-spacing    word-spacing    white-space   text-overflow
5. css3中新增属性：content   box-shadow   border-radius  transform

## vscode本地对应的配置

  本地的vscode上需要安装stylelint和prettier插件

```JSON
  // 保存时自动格式化成stylelint风格，vscode的默认的代码格式化ctrl+shift+f
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  // stylelint配置
  "stylelint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // "[scss]": {
  //     "editor.formatOnSave": true
  // },
```

## .stylelint.js文件简单配置

``` JSON
  module.exports = {
    "processors": [],
    "plugins": ["stylelint-order"],
    "extends": ["stylelint-config-standard", "stylelint-config-recess-order"], // 这是官方推荐的方式
    "ignoreFiles": [
        "**/*.js",
        "**/*.jsx",
        "**/*.ts"
    ],
    "rules": {
      // 取消某些规则如下:
      //   "unit-case": null,
      //   "rule-empty-line-before": null,
      //   "comment-empty-line-before": null,
      //   "declaration-block-trailing-semicolon": null,
      //   "selector-type-no-unknown": null,
      "number-leading-zero": null, // 小数点前的0可以不加
      "at-rule-no-unknown": [true, {
        "ignoreAtRules": ["extends", "ignores", "include", "mixin", "if", "else", "media", "for"]
      }],
      "no-descending-specificity": null,
      "indentation": 4, // 缩进4位
      "color-hex-case": [
        "upper", // color单位大写
        {
          "message": "Lowercase letters are easier to distinguish from numbers"
        }
      ],
    }
  };
```

|123|234|345|
|:---:|:---:|:---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|

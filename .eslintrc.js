module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  // 'off'或者0  //关闭规则关闭
  // 'warn'或者1  //在打开的规则作为警告（不影响退出代码）
  // 'error'或者2  //把规则作为一个错误（退出代码触发时为1）
  rules: {
    // 禁止或强制括号内的空格
    'array-bracket-spacing': [ 2, 'always' ],
    // 需要在箭头函数体中使用大括号
    'arrow-body-style': 0,
    // 需要箭头函数参数中的括号
    'arrow-parens': 0,
    // 禁止在对象和数组文字中使用尾随逗号
    'comma-dangle': [ 2, 'only-multiline' ],
    // 在 Switch 语句中需要default和case
    'default-case': 0,
    // 需要 === 和 !==
    'eqeqeq': [ 2, 'allow-null' ],
    // 要求或禁止命名function表达式
    'func-names': 0,
    // 要求或禁止类成员之间的空行
    'lines-between-class-members': [ 2, 'always', { 'exceptAfterSingleLine': true } ],
    // 调用不带参数的构造函数时需要括号
    'new-parens': 0,
    // 禁止可能与比较混淆的箭头函数
    'no-confusing-arrow': 0,
    // 禁止使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止在 else 之前返回
    'no-else-return': 0,
    // 禁止空块语句
    'no-empty': [ 2, { 'allowEmptyCatch': true } ],
    // 禁止if语句作为else块中唯一的语句
    'no-lonely-if': 0,
    // 禁止嵌套三元表达式
    'no-nested-ternary': 0,
    // 禁止重新分配函数参数
    'no-param-reassign': [ 2, { props: false } ],
    // 禁止使用一元运算符++and --
    'no-plusplus': 0,
    // 禁止在 return 语句中赋值
    'no-return-assign': 0,
    // 禁止指定的语法
    'no-restricted-syntax': [ 2, 'LabeledStatement', 'WithStatement' ],
    // 禁止标识符中的悬垂下划线
    'no-underscore-dangle': 0,
    // 禁止循环体只允许一次迭代
    'no-unreachable': 1,
    // 禁止多余的 return 语句
    'no-useless-return': 1,
    // 强制最大行长度
    'max-len': [ 2, { 'code': 200 } ],
    // 在打开大括号之后和关闭大括号之前强制执行一致的换行符
    'object-curly-newline': 0,
    // 强制将对象属性放在单独的行上
    'object-property-newline': 1,
    // 建议使用const
    'prefer-const': 1,
    // 优先从数组和对象中解构
    'prefer-destructuring': 0,
    // 需要使用 Error 对象作为 Promise 拒绝原因
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': 0,
    // 需要在对象文字属性名称周围加引号
    'quote-props': [ 2, 'as-needed', { 'unnecessary': false } ],
    // 强制一致使用反引号、双引号或单引号
    'quotes': [ 2, 'single' ],
    // 要求或禁止使用分号代替 ASI
    'semi': [ 2, 'never' ],
    // 强制分号的位置
    'semi-style': [ 2, 'first' ],
    // 在模板字符串中强制使用间距
    'template-curly-spacing': [ 2, 'always' ],
  },
};

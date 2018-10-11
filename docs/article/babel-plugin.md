---
title: Babel插件-polyfill/runtime/env
author: Drink
category: Javascript
---

> 在项目开发过程中，我们往往需要引入babel来解决代码兼容性的问题。目前有三种方式，分别是`babel-polyfill`，`babel-runtime`和`babel-preset-env`，那么这三种方式有什么区别，结合webpack打包出来的效果哪种比较优呢，下面我们来对比一下。
  
## 准备工作

开始对比之前，我们需要初始化一个webpack项目

```bash
npm init babel-test
```

这里我们不打算安装webpack 4.X的版本，安装一下3.X的版本即可

```bash
npm i -D webpack@3.7.0
```

在项目根目录下新建一个webpack.config.js文件，配置如下

```javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // JavaScript 执行入口文件
  entry: {
    app: ['./main.js']
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline: true
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        // use: ['style-loader', 'css-loader?minimize'],
        use: ExtractTextPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader']
        })
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name].css`,
    })
  ]
};
```

package.json配置如下

```json
{
  "name": "babel-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "css-loader": "^0.28.11",
    "extract-text-webpack-plugin": "^3.0.2",
    "style-loader": "^0.20.3",
    "webpack": "^3.7.0",
    "webpack-cli": "^1.5.3",
    "webpack-dev-server": "^2.11.1"
  },
  "dependencies": {
    "babel-polyfill": "^6.26.0",
    "babel-runtime": "^6.26.0"
  }
}
```

我们往main.js里面写入一些代码

```javascript
const elements = [1, 2, 3].map((item) => {
  return (
    console.log('9999')
  )
});

console.log(elements);

async function azumia() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
azumia();

console.log(Object.values({ 1: 2 }));

console.log(Array.isArray([]));
```

## babel-polyfill

babel-polyfill 是为了模拟一个完整的ES2015+环境，旨在用于应用程序而不是库/工具。并且使用babel-node时，这个polyfill会自动加载。这里要注意的是babel-polyfill是一次性引入你的项目中的，并且同项目代码一起编译到生产环境。而且会污染全局变量。像Map，Array.prototype.find这些就存在于全局空间中。

所以这里将其安装到生产环境

```bash
npm install babel-polyfill --save
```

webpack.config.js中这样配置即可

```javascript
entry: {
    app: ['babel-polyfill','./main.js']
}
```

我们执行一下一下命令，开始打包

```bash
npm run start
```

打包出来的bundle.js的文件大小为259K，而加入babel-polyfill之前的包的大小仅为4K，体积大了许多。
那么我们能不能做到按需引用babel-polyfill，从而减小包的大小呢？答案是可以的，这就要靠babel-runtime来实现了。

## babel-runtime

babel-runtime不会污染全局空间和内置对象原型。事实上babel-runtime是一个模块，你可以把它作为依赖来达成ES2015的支持。

比如环境不支持Promise，你可以在项目中加入

```javascript
require(‘babel-runtime/core-js/promise’)
```

来获取Promise。

这样我们就弥补了babel-polyfill的缺点，达到了按需加载的效果。但是在实际项目开发过程中，我们往往会写很多新的es6 api，每次都要手动引入相应的包比较麻烦，维护起来也不方便，每个文件重复引入也造成代码的臃肿。
要解决这个问题，就要用到 `babel-plugin-transform-runtime`，它会分析我们的 ast 中，是否有引用 babel-rumtime 中的垫片（通过映射关系），如果有，就会在当前模块顶部插入我们需要的垫片。
接下来我们尝试一下，先安装babel-runtime和babel-plugin-transform-runtime。

```javascript
npm install --save babel-runtime
npm install --save-dev babel-plugin-transform-runtime
```

由于 babel-runtime只是集中了polyfill的library，对应需要的 polyfill 都是要引入项目中，并跟项目代码一起打包的，所以就要加入到生产环境依赖中

下面在.babelrc中加入以下配置

```json
{
  "plugins": ["transform-runtime"]
}
```

执行打包命令，打包出来的bundle.js的大小为63K，比完整引入polyfill小了好多。但是事物都有两面性，babel-runtime有个缺点，它不模拟实例方法，即内置对象原型上的方法，所以类似Array.prototype.find，你通过babel-runtime是无法使用的，这只能通过 babel-polyfill 来转码，因为 babel-polyfill 是直接在原型链上增加方法。这就悲催了，难道还是要完整引入babel-polyfill?其实还有一个解决的办法，就是用babel-preset-env

## babel-preset-env

babel-preset-env 能根据当前的运行环境，自动确定你需要的 plugins 和 polyfills。通过各个 es标准 feature 在不同浏览器以及 node 版本的支持情况，再去维护一个 feature 跟 plugins 之间的映射关系，最终确定需要的 plugins。关于详细的配置说明，请[点击这里](https://github.com/babel/babel/tree/master/packages/babel-preset-env#examples)

我们修改一下.babelrc的配置

```json
{
  "presets": [
    ["env", {
      "targets": {
        "chrome": 52,
        "browsers": ["last 2 versions", "safari 7"]
      },
      "modules": false,
      "useBuiltIns": "usage",
      "debug": false
    }]
  ]
}
```

其中useBuiltins值有三个，分别是：

- usage（推荐）: 仅加载代码中用到的polyfill
- entry: 仅引入有浏览器不支持的polyfill
- false: 不对polyfill做任何操作

### 实践

首先构造一个js文件test.js

```javascript
var a = new Map();
var b = Promise.resolve();

Object.assign({}, {1: 1});
"foobar".includes("foo");
```

#### usage

用babel进行编译，结果如下：

```javascript
/*
Added following polyfills:
es6.map {}
es6.string.iterator {}
es6.array.iterator {}
web.dom.iterable {}
es6.promise {}
es6.object.assign {}
es6.string.includes {}
es7.array.includes {}
*/

"use strict";

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.promise");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

// import '@babel/polyfill';
var a = new Map();
var b = Promise.resolve();
Object.assign({}, {
  1: 1
});
"foobar".includes("foo");

```

#### entry

这种配置下需要在头部引入polyfill

```javascript
import '@babel/polyfill';

var a = new Map();
var b = Promise.resolve();

Object.assign({}, {1: 1});
"foobar".includes("foo");
```

使用babel编译结果如下：

```javascript

/*
Replaced `@babel/polyfill` with the following polyfills:
es6.array.copy-within {}
es6.array.every {}
es6.array.fill {}
es6.array.filter {}
es6.array.find {}
es6.array.find-index {}
es6.array.for-each {}
es6.array.from {}
es7.array.includes {}
es6.array.index-of {}
es6.array.is-array {}
es6.array.iterator {}
es6.array.last-index-of {}
es6.array.map {}
es6.array.of {}
es6.array.reduce {}
es6.array.reduce-right {}
es6.array.some {}
es6.array.sort {}
es6.array.species {}
es6.date.now {}
es6.date.to-iso-string {}
es6.date.to-json {}
es6.date.to-primitive {}
es6.date.to-string {}
es6.function.bind {}
es6.function.has-instance {}
es6.function.name {}
es6.map {}
es6.math.acosh {}
es6.math.asinh {}
es6.math.atanh {}
es6.math.cbrt {}
es6.math.clz32 {}
es6.math.cosh {}
es6.math.expm1 {}
es6.math.fround {}
es6.math.hypot {}
es6.math.imul {}
es6.math.log1p {}
es6.math.log10 {}
es6.math.log2 {}
es6.math.sign {}
es6.math.sinh {}
es6.math.tanh {}
es6.math.trunc {}
es6.number.constructor {}
es6.number.epsilon {}
es6.number.is-finite {}
es6.number.is-integer {}
es6.number.is-nan {}
es6.number.is-safe-integer {}
es6.number.max-safe-integer {}
es6.number.min-safe-integer {}
es6.number.parse-float {}
es6.number.parse-int {}
es6.object.assign {}
es6.object.create {}
es7.object.define-getter {}
es7.object.define-setter {}
es6.object.define-property {}
es6.object.define-properties {}
es7.object.entries {}
es6.object.freeze {}
es6.object.get-own-property-descriptor {}
es7.object.get-own-property-descriptors {}
es6.object.get-own-property-names {}
es6.object.get-prototype-of {}
es7.object.lookup-getter {}
es7.object.lookup-setter {}
es6.object.prevent-extensions {}
es6.object.is {}
es6.object.is-frozen {}
es6.object.is-sealed {}
es6.object.is-extensible {}
es6.object.keys {}
es6.object.seal {}
es6.object.set-prototype-of {}
es7.object.values {}
es6.promise {}
es7.promise.finally {}
es6.reflect.apply {}
es6.reflect.construct {}
es6.reflect.define-property {}
es6.reflect.delete-property {}
es6.reflect.get {}
es6.reflect.get-own-property-descriptor {}
es6.reflect.get-prototype-of {}
es6.reflect.has {}
es6.reflect.is-extensible {}
es6.reflect.own-keys {}
es6.reflect.prevent-extensions {}
es6.reflect.set {}
es6.reflect.set-prototype-of {}
es6.regexp.constructor {}
es6.regexp.flags {}
es6.regexp.match {}
es6.regexp.replace {}
es6.regexp.split {}
es6.regexp.search {}
es6.regexp.to-string {}
es6.set {}
es6.symbol {}
es7.symbol.async-iterator {}
es6.string.anchor {}
es6.string.big {}
es6.string.blink {}
es6.string.bold {}
es6.string.code-point-at {}
es6.string.ends-with {}
es6.string.fixed {}
es6.string.fontcolor {}
es6.string.fontsize {}
es6.string.from-code-point {}
es6.string.includes {}
es6.string.italics {}
es6.string.iterator {}
es6.string.link {}
es7.string.pad-start {}
es7.string.pad-end {}
es6.string.raw {}
es6.string.repeat {}
es6.string.small {}
es6.string.starts-with {}
es6.string.strike {}
es6.string.sub {}
es6.string.sup {}
es6.string.trim {}
es6.typed.array-buffer {}
es6.typed.data-view {}
es6.typed.int8-array {}
es6.typed.uint8-array {}
es6.typed.uint8-clamped-array {}
es6.typed.int16-array {}
es6.typed.uint16-array {}
es6.typed.int32-array {}
es6.typed.uint32-array {}
es6.typed.float32-array {}
es6.typed.float64-array {}
es6.weak-map {}
es6.weak-set {}
web.timers {}
web.immediate {}
web.dom.iterable {}

*/

"use strict";

require("core-js/modules/es6.array.copy-within");

require("core-js/modules/es6.array.every");

require("core-js/modules/es6.array.fill");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.from");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.array.last-index-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.of");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.reduce-right");

require("core-js/modules/es6.array.some");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.array.species");

require("core-js/modules/es6.date.now");

require("core-js/modules/es6.date.to-iso-string");

require("core-js/modules/es6.date.to-json");

require("core-js/modules/es6.date.to-primitive");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.function.has-instance");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.map");

require("core-js/modules/es6.math.acosh");

require("core-js/modules/es6.math.asinh");

require("core-js/modules/es6.math.atanh");

require("core-js/modules/es6.math.cbrt");

require("core-js/modules/es6.math.clz32");

require("core-js/modules/es6.math.cosh");

require("core-js/modules/es6.math.expm1");

require("core-js/modules/es6.math.fround");

require("core-js/modules/es6.math.hypot");

require("core-js/modules/es6.math.imul");

require("core-js/modules/es6.math.log1p");

require("core-js/modules/es6.math.log10");

require("core-js/modules/es6.math.log2");

require("core-js/modules/es6.math.sign");

require("core-js/modules/es6.math.sinh");

require("core-js/modules/es6.math.tanh");

require("core-js/modules/es6.math.trunc");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.number.epsilon");

require("core-js/modules/es6.number.is-finite");

require("core-js/modules/es6.number.is-integer");

require("core-js/modules/es6.number.is-nan");

require("core-js/modules/es6.number.is-safe-integer");

require("core-js/modules/es6.number.max-safe-integer");

require("core-js/modules/es6.number.min-safe-integer");

require("core-js/modules/es6.number.parse-float");

require("core-js/modules/es6.number.parse-int");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es7.object.define-getter");

require("core-js/modules/es7.object.define-setter");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.get-own-property-descriptor");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.object.get-own-property-names");

require("core-js/modules/es6.object.get-prototype-of");

require("core-js/modules/es7.object.lookup-getter");

require("core-js/modules/es7.object.lookup-setter");

require("core-js/modules/es6.object.prevent-extensions");

require("core-js/modules/es6.object.is");

require("core-js/modules/es6.object.is-frozen");

require("core-js/modules/es6.object.is-sealed");

require("core-js/modules/es6.object.is-extensible");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.seal");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.promise");

require("core-js/modules/es7.promise.finally");

require("core-js/modules/es6.reflect.apply");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.reflect.define-property");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es6.reflect.get");

require("core-js/modules/es6.reflect.get-own-property-descriptor");

require("core-js/modules/es6.reflect.get-prototype-of");

require("core-js/modules/es6.reflect.has");

require("core-js/modules/es6.reflect.is-extensible");

require("core-js/modules/es6.reflect.own-keys");

require("core-js/modules/es6.reflect.prevent-extensions");

require("core-js/modules/es6.reflect.set");

require("core-js/modules/es6.reflect.set-prototype-of");

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.regexp.flags");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.set");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.string.anchor");

require("core-js/modules/es6.string.big");

require("core-js/modules/es6.string.blink");

require("core-js/modules/es6.string.bold");

require("core-js/modules/es6.string.code-point-at");

require("core-js/modules/es6.string.ends-with");

require("core-js/modules/es6.string.fixed");

require("core-js/modules/es6.string.fontcolor");

require("core-js/modules/es6.string.fontsize");

require("core-js/modules/es6.string.from-code-point");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.string.italics");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.string.link");

require("core-js/modules/es7.string.pad-start");

require("core-js/modules/es7.string.pad-end");

require("core-js/modules/es6.string.raw");

require("core-js/modules/es6.string.repeat");

require("core-js/modules/es6.string.small");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es6.string.strike");

require("core-js/modules/es6.string.sub");

require("core-js/modules/es6.string.sup");

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.typed.array-buffer");

require("core-js/modules/es6.typed.data-view");

require("core-js/modules/es6.typed.int8-array");

require("core-js/modules/es6.typed.uint8-array");

require("core-js/modules/es6.typed.uint8-clamped-array");

require("core-js/modules/es6.typed.int16-array");

require("core-js/modules/es6.typed.uint16-array");

require("core-js/modules/es6.typed.int32-array");

require("core-js/modules/es6.typed.uint32-array");

require("core-js/modules/es6.typed.float32-array");

require("core-js/modules/es6.typed.float64-array");

require("core-js/modules/es6.weak-map");

require("core-js/modules/es6.weak-set");

require("core-js/modules/web.timers");

require("core-js/modules/web.immediate");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var a = new Map();
var b = Promise.resolve();
Object.assign({}, {
  1: 1
});
"foobar".includes("foo");

````

可以看到，这种情况下会引入很多没有用到的polyfill。

## 总结

|方案|打包后大小|优点|缺点|
|--|--|--|--|
|babel-polyfill|259k|完整模拟ES2015+环境|体积过大；污染全局对象和内置的对象原形|
|babel-runtime|63k|按需引入，打包体积小|不模拟实例方法|
|babel-preset-env(开启useBuiltIns)|194k|按需引入，可配置性高|-|





---
title: Babel插件-polyfill/runtime/env
author: Drink
category: Javascript
---

> 在项目开发过程中，我们往往需要引入babel来解决代码兼容性的问题。目前有三种方式，分别是`babel-polyfill`，`babel-runtime`和`babel-preset-env`，那么这三种方式有什么区别，结合webpack打包出来的效果哪种比较优呢，下面我们来对比一下。
  
# 准备工作

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

# babel-polyfill

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

# babel-runtime

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

# babel-preset-env

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

其中的useBuiltIns就是是否开启自动支持 polyfill，它能自动给每个文件添加其需要的poly-fill。 我们来尝试一下，main.js中映入babel-polyfill

```javascript
require('babel-polyfill')
```

你没看错，是要在main.js中引入，直接在webpack中配置貌似是不行的。

执行打包命令后，bundle.js的大小为194K，对比之下还是要小了些的。

如果此时在浏览器中打开页面，会发现有报错

这个问题的原因及解决方案请点击[这里](https://github.com/babel/babel/issues/5500)，我们修改一下babel-polyfill的引入方式，require 改为 import，将引入提升到前面

```javascript
 - require('babel-polyfill')
 + import 'babel-polyfill'
```

再次打包后即可

# 总结

|方案|打包后大小|优点|缺点|
|--|--|--|--|
|babel-polyfill|259k|完整模拟ES2015+环境|体积过大；污染全局对象和内置的对象原形|
|babel-runtime|63k|按需引入，打包体积小|不模拟实例方法|
|babel-preset-env(开启useBuiltIns)|194k|按需引入，可配置性高|-|





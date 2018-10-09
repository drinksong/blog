---
title: Parcel配置react应用
author: Drink
category: Javascript
---

> 使用Parcel可以快速搭建web应用程序，避免了花费大量的时间去配置webpack等构建工具，详情可以点击[这里](https://parceljs.org/)。

接下来我们将利用Parcel搭建一个react应用。

1. 创建npm项目
    
    ```bash
    mkdir parcel-react
    cd parcel-react
    npm init
    ```
    
    一路回车即可。

2. 安装依赖

    安装react和react-dom
    
    ```bash
    yarn add react react-dom
    ```
    
    安装parcel-bundler
    
    ```bash
    yarn add parcel-bundler -D
    ```
    
    安装babel的各种插件
    
    ```bash
    yarn add @babel/core -D
    yarn add @babel/preset-react -D
    yarn add @babel/preset-env -D
    yarn add @babel/polyfill
    ```
    
    有一些功能需要安装额外的插件，比如@babel/plugin-proposal-class-properties
    
3. 配置.babelrc

    ```json
    {
      "presets": [
        [
          "@babel/preset-env",
          {
            "debug": true,
            "useBuiltIns": "entry"
          }
        ],
        "@babel/preset-react"
      ],
      "plugins": [
        "@babel/plugin-proposal-class-properties"
      ]
    }
    ```
    
    useBuiltIns开启后可以实现polyfill的按需加载，当然同样是需要引入polyfill
    
    ```javascript
    import '@babel/polyfill';
    ```
    
    polyfill的按需加载还可以通过@babel/plugin-transform-runtime，具体可以查看[这篇文章](/article/babel-plugin.html)。

4. 创建index.html以及js文件

    **index.html**
     
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="index.js"></script>
    </body>
    </html>
    ```   
    
    **index.js**
    
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import '@babel/polyfill';
    import { Grid, Button, Well } from 'react-bootstrap';
    import { Transition } from 'react-transition-group';
    
    class Example extends React.Component {
        state = {
            show: false,
            entered: false,
        };
    
        render() {
            const { show } = this.state;
            return (
                <Grid style={{ paddingTop: '2rem' }}>
                    <Button
                        onClick={() => {
                            this.setState(state => ({
                                show: !state.show,
                            }));
                        }}
                    >
                        Toggle
                    </Button>
                    <Well style={{ marginTop: '1rem' }}>
                        <Transition
                            in={show}
                            timeout={1000}
                            unmountOnExit
                        >
                            {state => {
                                switch (state) {
                                    case 'entering':
                                        return 'Entering…';
                                    case 'entered':
                                        return 'Entered!';
                                    case 'exiting':
                                        return 'Exiting…';
                                    case 'exited':
                                        return 'Exited!';
                                }
                            }}
                        </Transition>
                    </Well>
                </Grid>
            );
        }
    }
    
    ReactDOM.render(
        <Example />,
        document.getElementById('app')
    );

    ```
    
    自行安装npm包。

5. 启动

    ```bash
    parcel index.html
    ```
    
    建议在package.json中配置
    
    ```json
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "parcel index.html"
      }
    }
    ```
    
    执行
    
    ```bash
    yarn start
    ```


---
title: React中context的使用
author: Drink
category: Javascript
---

> 重要声明：context 相关内容在将来仍有可能会发生变动，所以不建议使用在生产环境中。

## 什么是context

在 React 中，通过你的 React 组件很容易追踪数据流。但你察看一个组件时，你可以找出哪些属性(props)被传递，这使得你的应用非常容易理解。

在某些场景下，你想在整个组件树中传递数据，但却不想手动地在每一层传递属性。你可以直接在 React 中使用强大的”context” API解决上述问题。

## 实例

```javascript
import ReactDOM from 'react-dom';
import React from 'react'

// Children component
class Children extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.context.name
    };
  }

  render() {
    return(
      <ul>
        <li>
          {`child context is: ${this.context.age}`} // child context is: 18
        </li>
        <li>
          {`state from context: ${this.state.name}`} // state from context: mars
        </li>
        <li>
          {`print age: ${this.context.print(this.context.age)}`} // print age: 18
        </li>
      </ul>
    );
  }
}

Children.contextTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  print: React.PropTypes.func
};


// Parent component
class Parent extends React.Component {
  getChildContext() {
    return {
      name: 'mars',
      age: 18
    };
  }

  render() {
    return (
      <div>
        {`from App component: ${this.context.name}`} // from App component: bruno
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Parent.contextTypes = {
  name: React.PropTypes.string
};
Parent.childContextTypes = {
  age: React.PropTypes.number,
  name: React.PropTypes.string
};

// App component
class App extends React.Component {
  getChildContext() {
    return { 
        name: 'mars',
        print: (m) => m
     };
  }

  render() {
    return (
      <Parent>
        <Children />
      </Parent>
    );
  }
}

App.childContextTypes = {
  name: React.PropTypes.string,
  print: React.PropTypes.func
};

ReactDOM.render(<App />, document.getElementById('app'));
```

在上面的例子中，我们可以看到在`App`组件中声明的`print`方法并没有通过`Parent`传递，而是通过`context`直接传递给了`Children`，这大大方便了我们传值的操作，不再需要一遍一遍地写`print={this.props.print}`。但同时，我们也需要注意，不要将所有东西都绑定在`context`上，而是只在必要时使用`context`，毕竟全局变量很危险。

## 使用方法

使用`getChildContext`方法将属性传递给子组件，并使用`childContextTypes`声明传递数据类型，子组件中需要显式地使用`contextTypes`声明需要用到的属性的数据类型。

需要传递进`context`参数才可以在`constructor`方法中使用`context`，要不然React将会报错。

在组件中，通过`this.context`访问`context`中的属性或方法。

## 相关api

- contextTypes
当需要在当前组件使用从上级组件传入的context的属性时，需要为用到的属性声明数据类型

- childContextTypes
声明传递给子组件的属性的数据类型。

- getChildContext
设置传递给子组件的属性，可以覆盖，也可以新增。
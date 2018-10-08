---
title: React创建组件的几种方法
author: Drink
category: Javascript
---

# 几种方法

## CreateClass

如果你还没有使用ES6语法，那么定义组件，只能使用`React.createClass`这个helper来创建组件，下面是一段示例：

```Javascript
var React = require("react");
var Greeting = React.createClass({

  propTypes: {
    name: React.PropTypes.string //属性校验
  },

  getDefaultProps: function() {
    return {
      name: 'Mary' //默认属性值
    };
  },

  getInitialState: function() {
    return {count: this.props.initialCount}; //初始化state
  },

  handleClick: function() {
    //用户点击事件的处理函数
  },

  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
module.exports = Greeting;
```

这段代码，包含了组件的几个关键组成部分，这种方式下，组件的props、state等都是以对象属性的方式组合在一起，其中默认属props和初始state都是返回对象的函数，propTypes则是个对象。这里还有一个值得注意的事情是，在createClass中，React对属性中的所有函数都进行了this绑定，也就是如上面的`hanleClick`其实相当于`handleClick.bind(this)` 。


## Component

因为ES6对类和继承有语法级别的支持，所以用ES6创建组件的方式更加优雅，下面是示例：

```Javascript

import React from 'react';
class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.handleClick = this.handleClick.bind(this);
  }

  //static defaultProps = {
  //  name: 'Mary'  //定义defaultprops的另一种方式
  //}

  //static propTypes = {
    //name: React.PropTypes.string
  //}

  handleClick() {
    //点击事件的处理函数
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string
};

Greeting.defaultProps = {
  name: 'Mary'
};
export default Greating;

```

可以看到Greeting继承自React.component,在构造函数中，通过super()来调用父类的构造函数，同时我们看到组件的state是通过在构造函数中对this.state进行赋值实现，而组件的props是在类Greeting上创建的属性，如果你对类的属性和对象的属性的区别有所了解的话，大概能理解为什么会这么做。对于组件来说，组件的props是父组件通过调用子组件向子组件传递的，子组件内部不应该对props进行修改，它更像是所有子组件实例共享的状态，不会因为子组件内部操作而改变，因此将props定义为类Greeting的属性更为合理，而在面向对象的语法中类的属性通常被称作静态(static)属性，这也是为什么props还可以像上面注释掉的方式来定义。对于Greeting类的一个实例对象的state，它是组件对象内部维持的状态，通过用户操作会修改这些状态，每个实例的state也可能不同，彼此间不互相影响，因此通过this.state来设置。

用这种方式创建组件时，React并没有对内部的函数，进行this绑定，所以如果你想让函数在回调中保持正确的this，就要手动对需要的函数进行this绑定，如上面的handleClick，在构造函数中对this 进行了绑定。


## PureComponent

我们知道，当组件的props或者state发生变化的时候：React会对组件当前的`Props`和`State`分别与`nextProps`和`nextState`进行比较，当发现变化时，就会对当前`组件以及子组件`进行重新渲染，否则就不渲染。有时候为了避免组件进行不必要的重新渲染，我们通过定义`shouldComponentUpdate`来优化性能。例如如下代码：

```Javascript
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```

`shouldComponentUpdate`通过判断`props.color`和`state.count`是否发生变化来决定需不需要重新渲染组件，当然有时候这种简单的判断，显得有些多余和样板化，于是React就提供了`PureComponent`来自动帮我们做这件事，这样就不需要手动来写`shouldComponentUpdate`了：


```Javascript
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```

大多数情况下， 我们使用`PureComponent`能够简化我们的代码，并且提高性能，但是`PureComponent`的自动为我们添加的`shouldComponentUpdate`函数，只是对`props`和`state`进行浅比较(shadow comparison)，当`props`或者`state`本身是嵌套对象或数组等时，浅比较并不能得到预期的结果，这会导致实际的`props`和`state`发生了变化，但组件却没有更新的问题，例如下面代码有一个`ListOfWords`组件来将单词数组拼接成逗号分隔的句子，它有一个父组件`WordAdder`让你点击按钮为单词数组添加单词，但他并不能正常工作：

```Javascript
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
 }

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这个地方导致了bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
```

这种情况下，`PureComponent`只会对`this.props.words`进行一次浅比较，虽然数组里面新增了元素，但是`this.props.words`与`nextProps.words`指向的仍是同一个数组，因此`this.props.words !== nextProps.words`返回的便是`false`，从而导致`ListOfWords`组件没有重新渲染,笔者之前就因为对此不太了解，而随意使用`PureComponent`，导致`state`发生变化，而视图就是不更新，调了好久找不到原因~。

最简单避免上述情况的方式，就是避免使用可变对象作为`props`和`state`，取而代之的是每次返回一个全新的对象,如下通过`concat`来返回新的数组：

```Javascript
handleClick() {
  this.setState(prevState => ({
    words: prevState.words.concat(['marklar'])
  }));
}
```

你可以考虑使用`Immutable.js`来创建不可变对象，通过它来简化对象比较，提高性能。
这里还要提到的一点是虽然这里虽然使用了`Pure`这个词，但是`PureComponent`并不是纯的，因为对于纯的函数或组件应该是没有内部状态，对于`stateless component`更符合纯的定义，不了解纯函数的同学，可以参见[这篇文章](https://segmentfault.com/a/1190000007491981)。

## Stateless Functional Component

上面我们提到的创建组件的方式，都是用来创建包含状态和用户交互的复杂组件，当组件本身只是用来展示，所有数据都是通过`props`传入的时候，我们便可以使用`Stateless Functional Component`来快速创建组件。例如下面代码所示:

```Javascript
import React from 'react';
const Button = ({
  day,
  increment
}) => {
  return (
    <div>
      <button onClick={increment}>Today is {day}</button>
    </div>
  )
}

Button.propTypes = {
  day: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
}
```

这种组件，没有自身的状态，相同的`props`输入，必然会获得完全相同的组件展示。因为不需要关心组件的一些生命周期函数和渲染的钩子，所以不用继承自Component显得更简洁。


# 如何选择

1. **createClass**， 除非你确实对ES6的语法一窍不通，不然的话就不要再使用这种方式定义组件。

2. **Stateless Functional Component**，对于不需要内部状态，且用不到生命周期函数的组件，我们可以使用这种方式定义组件，比如展示性的列表组件，可以将列表项定义为**Stateless Functional Component**。

3. **PureComponent/Component**，对于拥有内部state，使用生命周期的函数的组件，我们可以使用二者之一，但是大部分情况下，我更推荐使用**PureComponent**，因为它提供了更好的性能，同时强制你使用不可变的对象，保持良好的编程习惯。

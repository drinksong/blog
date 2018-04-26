---
title: React高阶组件
author: Drink
category: Javascript
---

# 1.Mixins的缺点

React官方已不推荐使用Mixins的技术来实现代码的重用，Mixins技术有一系列的缺点，首先Mixins会造成命名冲突，我们通过以下的方式来注入Mixins：

```javascript
var myMixins = require('myMixins');

var Button = React.createClass({
    mixins: [myMixins],
    
    // ...
})
```

如果你需要注入多个mixins,其中一个是自己的，另外的可能是第三方的。那有可能在两个mixins里使用了相同名称的方法，这会使得其中的一个不起作用，而你能做的只有修改其中一个方法的名称。另一方面，一个mixins一开始可能是非常简单的，仅仅需要实现某一个功能，但当业务越加的复杂，需要往其中加入更多的方法的时候，就会变得非常复杂。要深入了解[mixins的缺点](https://doc.react-china.org/blog/2016/07/13/mixins-considered-harmful.html)，可以查看官方博客。

更多参考点[这里](https://github.com/MrErHu/blog/issues/5)。

# 2.组件继承
对于我自己来说这种方法以前使用的比较多，先创建一个BaseComponent，在其中实现一系列公共的方法，其后的每个组件都继承于这个组件，但缺点是不够灵活，在基础组件中只能实现一些比较固定的方法，而对于每个组件的定制化会有很大的限制。

# 3.React高阶组件

由于mixins的一系列缺点，React官方也意识到使用mixins所带来的痛点远远高于技术本身产生的优点，而高阶组件便可以代替mixins，而且当深入之后它还有着更加丰富的用法。

> 高阶组件（HOC）是React中对组件逻辑进行重用的高级技术。但高阶组件本身并不是React API。它只是一种模式，这种模式是由React自身的组合性质必然产生的。

## 高阶函数

说到高阶组件，就先得说到高阶函数了，高阶函数是至少满足下列条件的函数：

> 1、接受一个或多个函数作为输入
> 2、输出一个函数

在javascript这门函数为一等公民的语言中，高阶函数的使用还是非常之多的，像我们平时的回调函数等等，都用到了高阶函数的知识。我们先来看一个简单的高阶函数:

```javascript
var fun = function(x, y) {
    return x + y;
}
```

fun是一个函数，下面我们将整个函数作为参数传递给另一个函数

```javascript
var comp = function(x, y, f) {
    return f(x,y);
}
```

验证一下

```javascript
comp(1,2,fun) // 3
```

## 高阶组件定义

类比高阶函数的定义，高阶组件就是接受一个组件作为参数，在函数中对组件做一系列的处理，随后返回一个新的组件作为返回值。

我们先定义一个高阶组件BaseActivity

```javascript
const BaseActivity = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <section>
          <div>我的包裹组件</div>
          <WrappedComponent />
        </section>
        
      )
    }
  }
}
```

组件接受一个被包裹的组件作为参数，返回了一个经过处理的匿名组件。
在其他组件中使用这个高阶组件

```javascript
class Example extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%'
    }
  }

  componentWillMount() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return;
    } else {
      this.setState({
        width: '375px',
        height: '640px'
      })
    }
  }

  render() {
    let { width, height } = this.state;
    return (
      <div className="activity">
        <div className="activity-content" style={{ width, height }}>
          <button className="btn">参加活动</button>
        </div>
      </div>
    )
  }
}

export default BaseActivity(Example);
```

具体用法就是在export 组件的时候，使用BaseActivity函数来包裹这个组件，看下输出的react dom内容
![图片](http://agroup-bos.su.bcebos.com/ad8d7ed60958bb4700d682fd40ed3d8bc24e1789)

在Example组件外面包裹了一个匿名组件。

## 参数

既然高阶组件是一个函数，我们就可以向里面传递我们需要的参数

```javascript
const BaseActivity = (WrappedComponent, title) => {
  return class extends Component {
    render() {
      return (
        <section>
          <div>{title}</div>
          <WrappedComponent />
        </section>
        
      )
    }
  }
}
```

在Example中这样export

```javascript
export default BaseActivity(Example, '这是高阶组件的参数');
```
我们看下输出的react dom
![图片](http://agroup-bos.su.bcebos.com/de9a6c8a5f1f8355eedf08c1693f2bf37de67b73)

可以看到参数已经传递进去了。

当然还可以这样用(柯里化)

```javascript
const BaseActivity (title) => (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <section>
          <div>{title}</div>
          <WrappedComponent />
        </section>
        
      )
    }
  }
}
```

在Example中这样export

```javascript
export default BaseActivity('这是高阶组件的参数')(Example);
```

这种用法在ant-design的表单以及redux的connect中我们都可以看到

```javascript
// ant
const WrappedDemo = Form.create()(Demo)

// redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

高阶组件还可以扩展原组件的props属性，如下所示：

```javascript
const BaseActivity (title) => (WrappedComponent) => {
  return class extends Component {
    render() {
      const newProps = {
          id: Math.random().toString(8)
      }
      return (
        <section>
          <div>{title}</div>
          <WrappedComponent {...this.props} {...newProps}/>
        </section>
      )
    }
  }
}
```

看下输出的react dom

![图片](http://agroup-bos.su.bcebos.com/b84ecce05a1c11b466ef0c9d90682e871d2f0c71)

## 高阶组件的缺点

高阶组件也有一系列的缺点，首先是被包裹组件的静态方法会消失，这其实也是很好理解的，我们将组件当做参数传入函数中，返回的已经不是原来的组件，而是一个新的组件，原来的静态方法自然就不存在了。如果需要保留，我们可以手动将原组件的方法拷贝给新的组件，或者使用hoist-non-react-statics之类的库来进行拷贝。

## 结语

高阶函数对于初学者来说可能不太好理解，但当你深入其中，了解其中的原理之后，我们可以使用高阶函数来完成很多的工作。
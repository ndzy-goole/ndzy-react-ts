import React, { Component } from 'react';

export default class Son1 extends Component<any, any> {
  static defaultProps = {
    //1、加载默认属性
    name: 'sls',
    age: 23
  };
  // 用于初始化 state
  constructor(props: any) {
    super(props);
    console.log('1---初始化');
    this.state = { number: 0 };
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    // 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
    // 因为该函数是静态函数，所以取不到 `this`
    // 如果需要对比 `prevProps` 需要单独在 `state` 中维护
    console.log('@---getDerivedStateFromProps');
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    // 判断是否需要更新组件，多用于组件性能优化
    console.log('@---shouldComponentUpdate');
    return nextProps.name !== this.props.name;
  }

  componentDidMount() {
    // 组件挂载后调用
    // 可以在该函数中进行请求或者订阅
    console.log('@---componentDidMount');
  }

  getSnapshotBeforeUpdate() {
    // 用于获得最新的 DOM 数据
    console.log('@---getSnapshotBeforeUpdate');
  }

  componentWillUnmount() {
    // 组件即将销毁
    // 可以在此处移除订阅，定时器等等
    console.log('@---componentWillUnmount');
  }

  componentDidUnMount() {
    // 组件销毁后调用
    console.log('@---componentDidUnMount');
  }

  componentDidUpdate() {
    // 组件更新后调用
    console.log('@---componentDidUnMount');
  }
  // 渲染组件函数
  render() {
    return <div>Son1</div>;
  }
  // // 以下函数不建议使用
  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillUpdate(nextProps, nextState) {}
  // UNSAFE_componentWillReceiveProps(nextProps) {}
}

import React, { Component } from 'react';
import { Button } from 'antd';

//init constructor getDerivedStateFromProps  render componentDidMount
//state 和 props getDerivedStateFromProps shouldComponentUpdate  render  getSnapshotBeforeUpdate componentDidUpdate
export default class Son1 extends Component<any, any> {
  static defaultProps = {
    //1、加载默认属性
    name: 'sls',
    age: 23
  };
  // 用于初始化 state
  constructor(props: any) {
    super(props);
    console.log('init---1---constructor');
    this.state = { number: 0 };
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    console.log(
      'init constructor getDerivedStateFromProps  render componentDidMount '
    );
    console.log(
      'state 和 props getDerivedStateFromProps shouldComponentUpdate  render  getSnapshotBeforeUpdate componentDidUpdate'
    );
    // 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
    // 因为该函数是静态函数，所以取不到 `this`
    // 如果需要对比 `prevProps` 需要单独在 `state` 中维护
    console.log('init---2---getDerivedStateFromProps');
    console.log('state---1---getDerivedStateFromProps');
    console.log('props---1---getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    // 判断是否需要更新组件，多用于组件性能优化
    console.log('state---2---是否更新组件---shouldComponentUpdate');
    console.log('props---2---shouldComponentUpdate');
    return (
      nextProps.number !== this.props.number ||
      nextState.number !== this.state.number
    );
  }

  componentDidMount() {
    // 组件挂载后调用
    // 可以在该函数中进行请求或者订阅
    console.log('init---3---组件已挂载完成---componentDidMount');
  }

  getSnapshotBeforeUpdate() {
    // 用于获得最新的 DOM 数据

    console.log('state---3---getSnapshotBeforeUpdate-获取最新Dom');
    console.log('props---3---getSnapshotBeforeUpdate-获取最新Dom');
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
    console.log('state---4---componentDidUpdate');
    console.log('props---4---componentDidUpdate');
  }
  // 渲染组件函数
  render() {
    console.log('render');
    return (
      <div>
        <Button onClick={this.handleClick.bind(this)}>更新state</Button>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      number: 10
    });
  };
  // // 以下函数不建议使用
  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillUpdate(nextProps, nextState) {}
  // UNSAFE_componentWillReceiveProps(nextProps) {}
}

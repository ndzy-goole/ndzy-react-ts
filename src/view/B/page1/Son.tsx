import React, { Component } from 'react';

export default class Son extends Component<any, any> {
  componentWillReceiveProps() {
    // TODO:
    console.log('9、子组件将要接收到新属性');
    // static getDerivedStateFromProps(newProps: Props, newState: State) {
    //   console.log('--- ---');
    //   return null;
    // }
  }

  shouldComponentUpdate(newProps: any, newState: any) {
    console.log('10、子组件是否需要更新');
    if (newProps.number < 5) return true;
    return false;
  }

  componentWillUpdate() {
    console.log('11、子组件将要更新');
  }

  componentDidUpdate() {
    console.log('13、子组件更新完成');
  }

  componentWillUnmount() {
    console.log('14、子组件将卸载');
  }

  render() {
    console.log('---12、子组件挂载---');
    return <p>{this.props.number}</p>;
  }
}

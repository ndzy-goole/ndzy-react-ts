import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import './PageB1.scss';
import Son from './Son';
import Son1 from './Son1';

interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string; name: string }[] | string) => void;
  setAuthInfo: (authInfo: any) => void;
  clearStore: () => void;
}
interface State {
  [propName: string]: any;
}
// componentWillMount
// componentWillReceiveProps
// componentWillUpdate

// 页面1
export default class PageB1 extends Component<Props, State> {
  static defaultProps = {
    //1、加载默认属性
    name: 'sls',
    age: 23
  };
  constructor(props: Props) {
    super(props);
    console.log(props);
    this.state = { number: 0 };
    console.log('---2、加载默认状态---');
  }
  componentWillMount() {
    // TODO: 将会被替代
    console.log('---3、组件挂载之前---');
  }

  componentDidMount() {
    // TODO: 网络请求 事件监听
    console.log('---5、组件挂载完成---');
    this.setBreadcrumb();
  }
  shouldComponentUpdate(newProps: Props, newState: State) {
    console.log('---6、组件是否需要更新---');
    if (newState.number < 15) return true;
    return false;
  }

  componentWillUpdate() {
    // TODO:
    console.log('---7、父组件将要更新---');
  }

  componentDidUpdate() {
    console.log('---8、父组件更新完成---');
  }
  static getDerivedStateFromProps(newProps: Props, newState: State) {
    console.log('--- ---');
    return null;
  }
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('+++ +++');
  }

  render() {
    console.log('---4、render(组件挂载)---');
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        {this.state.number < 10 ? <Son number={this.state.number} /> : null}
        <Son1></Son1>
      </div>
    );
  }

  // 设置面包屑参数
  setBreadcrumb() {
    // breadcrumb形式设置格式
    // let arr = [
    //   { name: '面包屑名称1' },
    //   { path: '/a/a', name: '面包屑名称2' }
    // ];
    // this.props.setBreadcrumb(arr);
    // tab形式设置格式
    // this.props.setBreadcrumb('/moduleA/page3?a=1&b=2');
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
}

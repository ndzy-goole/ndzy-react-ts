import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import './PageA2.scss';
import Son1 from './Son1';
import { Button } from 'antd';

interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string; name: string }[] | string) => void;
  setAuthInfo: (authInfo: any) => void;
  clearStore: () => void;
}
interface State {
  [propName: string]: any;
}

// 页面2
export default class PageA2 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { number: 0 };
  }

  componentDidMount() {
    this.setBreadcrumb();
  }

  render() {
    return (
      <div className="ModuleAPage2">
        <h1>页面2</h1>
        <Button onClick={this.handleClick.bind(this)}>更新props</Button>
        {this.state.number < 5 ? (
          <Son1 number={this.state.number}></Son1>
        ) : null}
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

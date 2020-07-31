import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import './ModuleD.scss';

interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string, name: string }[] | string) => void,
  setAuthInfo: ([]) => void,
  clearStore: () => void
}
interface State {
  [propName: string]: any
}

// 模块D
export default class ModuleD extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.setBreadcrumb();
  }

  render() {
    return (
      <div className="ModuleD">
        <h1>模块D</h1>
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
}
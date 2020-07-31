import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Button } from 'antd';
import './Login.scss';

interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string, name: string }[] | string) => void,
  setAuthInfo: ([]) => void,
  clearStore: () => void
}
interface State {
  [propName: string]: any
}

// 登录页
export default class Login extends Component<Props, State> {
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
      <div className="Login">
        <h1>登录页</h1>
        <Button
          type="primary"
          onClick={this.handleLogin.bind(this)}>Login</Button>
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

  handleLogin() {
    const authInfo = [
      { auth: 'page1-auth', name: '页面1' }
    ];
    const path = '/moduleA/page1?a=1&b=2';

    this.props.history.push(path);
    this.props.setBreadcrumb(path);
    this.props.setAuthInfo(authInfo);
  }
}
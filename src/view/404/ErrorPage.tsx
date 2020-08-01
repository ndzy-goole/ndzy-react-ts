import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { useMount } from 'ahooks';
import './ErrorPage.scss';

interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string; name: string }[] | string) => void;
  setAuthInfo: (authInfo: any) => void;
  clearStore: () => void;
}

export default (props: Props) => {
  // 设置面包屑参数
  const setBreadcrumb = () => {
    console.log('设置面包屑');
    // breadcrumb形式设置格式
    // let arr = [
    //   { name: '面包屑名称1' },
    //   { path: '/a/a', name: '面包屑名称2' }
    // ];
    // props.setBreadcrumb(arr);
    // tab形式设置格式
    // props.setBreadcrumb('/moduleA/page3?a=1&b=2');
  };
  useMount(() => {
    setBreadcrumb();
  });
  return (
    <div className="ErrorPage">
      <h1>错误页面</h1>
    </div>
  );
};

import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import './PageA4'


interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string, name: string }[] | string) => void,
  setAuthInfo: (authInfo: any) => void,
  clearStore: () => void
}



export default (props: Props) => {
  return (
    <div className="ModuleAPage4">
      <h1>页面4</h1>
    </div>
  );
}
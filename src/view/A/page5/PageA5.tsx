import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import "./PageA5.scss"


interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string, name: string }[] | string) => void,
  setAuthInfo: (authInfo: any) => void,
  clearStore: () => void
}



export default (props: Props) => {
  return (
    <div className="ModuleAPage5">
      <h1>页面5</h1>
    </div>
  );
}
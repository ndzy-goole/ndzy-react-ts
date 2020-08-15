import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string; name: string }[] | string) => void;
  setAuthInfo: (authInfo: any) => void;
  clearStore: () => void;
}

export default ({ setBreadcrumb, setAuthInfo, clearStore }: Props) => {
  return (
    <div className="err-page flex justify-center items-center">
      <img src={require('../../images/404.png')} alt="404" />
    </div>
  );
};

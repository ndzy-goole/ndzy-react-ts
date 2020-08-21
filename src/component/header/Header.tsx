import React from 'react';
import Clock from '../clock';
import utils from '../../utils';

export default (props: any) => {
  return (
    <>
      <Clock></Clock>

      <div
        onClick={() => {
          utils.clearStore();
          utils.goPageG('/login');
        }}
      >
        退出
      </div>
    </>
  );
};

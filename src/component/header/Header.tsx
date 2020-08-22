import React from 'react';
import Clock from '../clock';
import { clearStore } from '../../utils/clearStore';
import { goPageG } from '../../utils';

export default (props: any) => {
  return (
    <>
      <Clock></Clock>

      <div
        onClick={() => {
          clearStore();
          goPageG('/login');
        }}
      >
        退出
      </div>
    </>
  );
};

import React from 'react';
import Clock from '@_c/clock';
import { clearStore } from '@_u/clearStore';
import { goPageG } from '@_u/index';
import { InitProps } from '@/types';

export default (props: InitProps) => {
  return (
    <div className="flex">
      <Clock></Clock>

      <div
        onClick={() => {
          clearStore();
          goPageG('/login');
        }}
      >
        退出
      </div>
    </div>
  );
};

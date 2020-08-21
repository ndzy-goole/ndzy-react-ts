import React from 'react';
import Clock from '../clock';
import { historyHash as history } from '../../root/history';
import utils from '../../utils';
import { HISTORY_KEY } from '../../constant/sysConstant';

export default (props: any) => {
  console.log(props);
  return (
    <>
      <Clock></Clock>

      <div
        onClick={() => {
          utils.remove(HISTORY_KEY); //清除缓存的store数据
          history.push('/login');
        }}
      >
        退出
      </div>
    </>
  );
};

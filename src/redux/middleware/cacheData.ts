import moment from 'moment';
import { message } from 'antd';
import * as Redux from 'redux';

import { HISTORY_KEY } from '../../constant/sysConstant';
import utils from '../../utils';

// 缓存数据中间件
export default function cacheData(store: Redux.Store) {
  return (next: Redux.Dispatch) => (action: Redux.AnyAction) => {
    next(action);

    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    const state = store.getState();
    const historyData = utils.getSession(HISTORY_KEY) || [];
    const obj = {
      state,
      time
    };

    // 只缓存最新的6条store
    try {
      utils.setSession(HISTORY_KEY, [obj, ...historyData.splice(0, 5)]);
    } catch (e) {
      message.error('缓存历史数据出错');
    }
  };
}

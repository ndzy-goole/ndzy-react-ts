import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import openKeysReducer from './openKeys';
import selectKeysReducer from './selectKeys';
import breadcrumbReducer from './breadcrumb';
import collapsedReducer from './collapsed';
import authInfoReducer from './authInfo';

export interface MyStore extends Store {
  // authInfo: any[];
  collapsed: boolean;
  breadcrumb: any[];
  openKeys: string[];
  selectedKeys: string[];
}

const middlewares = [];
middlewares.push(promiseMiddleware);
if (process.env.NODE_ENV === 'development') {
  //创建中间件logger
  const logger = createLogger({
    predicate: () => {
      return true;
    }
  });
  middlewares.push(logger);
}

const reducer = combineReducers({
  openKeysReducer,
  selectKeysReducer,
  breadcrumbReducer,
  collapsedReducer,
  authInfoReducer
});
//  window.STATE_FROM_SERVER 可以有第二个参数,表示 State 的最初状态。这通常是服务器给出的。
const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;

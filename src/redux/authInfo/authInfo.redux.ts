import { createActions, handleActions } from 'redux-actions';
import { SET_AUTH_INFO, CLEAR_STORE } from '../actionTypes';
import { AnyObj } from '@/types';

const authInfo: AnyObj[] = [];

export const authInfoAction = createActions({
  [SET_AUTH_INFO]: (authInfo: AnyObj[]) => {
    return authInfo;
  },
  [CLEAR_STORE]: () => {
    return [];
  }
});
const authInfoReducer = handleActions(
  {
    [SET_AUTH_INFO]: (state: AnyObj[], action) => {
      return [...action.payload];
    },
    [CLEAR_STORE]: (state: AnyObj[], action) => {
      return action.payload;
    }
  },
  authInfo
);

export default authInfoReducer;

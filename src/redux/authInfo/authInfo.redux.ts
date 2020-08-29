import { createActions, handleActions } from 'redux-actions';
import { SET_AUTH_INFO, CLEAR_STORE } from '../actionTypes';
import { AnyObj } from '@/types';

const authInfo: AnyObj[] = [];

const authInfoAction = createActions({
  [SET_AUTH_INFO]: (authInfo: AnyObj[]) => {
    return authInfo;
  },
  [CLEAR_STORE]: () => {
    return [];
  }
});
// console.log(authInfoAction);
export const setAuthInfo = authInfoAction.setAuthInfo;
export const clearAuthInfoStore = authInfoAction.clearStore;

const authInfoReducer = handleActions(
  {
    [SET_AUTH_INFO]: (state: AnyObj[], action) => {
      return action.payload.length > 0 ? [...action.payload] : [];
    },
    [CLEAR_STORE]: (state: AnyObj[], action) => {
      return action.payload;
    }
  },
  authInfo
);

export default authInfoReducer;

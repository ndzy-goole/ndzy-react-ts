import { createActions, handleActions } from 'redux-actions';

export interface AuthInfoStore {
  authInfo: { [propsName: string]: any }[];
}

const authInfo: { [propsName: string]: any }[] = [];

export const { setauthinfo, clearauthinfo } = createActions({
  SETAUTHINFO: (authInfo: { [propsName: string]: any }[]) => {
    return authInfo;
  },
  CLEARAUTHINFO: () => {
    return [];
  }
});
const authInfoReducer = handleActions(
  {
    SETAUTHINFO: (state: { [propsName: string]: any }[], action) => {
      return action.payload.length > 0 ? [...action.payload] : [];
    },
    CLEARAUTHINFO: (state: { [propsName: string]: any }[], action) => {
      return action.payload;
    }
  },
  authInfo
);

export default authInfoReducer;

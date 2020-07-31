import { createActions, handleActions } from 'redux-actions';

export interface AuthInfoStore {
  authInfo: { [propsName: string]: any }[];
}

const initialStore: AuthInfoStore = {
  authInfo: []
};

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
    SETAUTHINFO: (state: AuthInfoStore, action) => {
      return Object.assign({}, state, {
        authInfo: action.payload
      });
    },
    CLEARAUTHINFO: (state: AuthInfoStore, action) => {
      return Object.assign({}, state, {
        authInfo: action.payload
      });
    }
  },
  initialStore
);

export default authInfoReducer;

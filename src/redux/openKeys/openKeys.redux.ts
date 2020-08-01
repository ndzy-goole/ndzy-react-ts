import { createActions, handleActions } from 'redux-actions';

const openKeys: string[] = [];
export const { setopenkeys, clearopenkeys } = createActions({
  SETOPENKEYS: (openKeys: string[]) => {
    return openKeys;
  },
  CLEAROPENKEYS: () => {
    return [];
  }
});

const openKeysReducer = handleActions(
  {
    SETOPENKEYS: (state: string[], action) => {
      return Object.assign(state, action.payload);
    },
    CLEAROPENKEYS: (state: string[], action) => {
      return Object.assign(state, action.payload);
    }
  },
  openKeys
);

export default openKeysReducer;

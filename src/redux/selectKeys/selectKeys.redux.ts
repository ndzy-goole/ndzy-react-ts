import { createActions, handleActions } from 'redux-actions';

const selectKeys: string[] = [];

export const { setselectkeys, clearselectkeys } = createActions({
  SETSELECTKEYS: (selectKeys: string[]) => {
    return selectKeys;
  },
  CLEARSELECTKEYS: () => {
    return [];
  }
});

const selectKeysReducer = handleActions(
  {
    SETSELECTKEYS: (state: string[], action) => {
      return Object.assign(state, action.payload);
    },
    CLEARSELECTKEYS: (state: string[], action) => {
      return Object.assign(state, action.payload);
    }
  },
  selectKeys
);

export default selectKeysReducer;

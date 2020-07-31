import { createActions, handleActions } from 'redux-actions';

export interface OpenKeysStore {
  openkeys: string[];
}

const initialStore: OpenKeysStore = {
  openkeys: []
};

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
    SETOPENKEYS: (state: OpenKeysStore, action) => {
      return Object.assign({}, state, {
        openkeys: action.payload
      });
    },
    CLEAROPENKEYS: (state: OpenKeysStore, action) => {
      return action.payload;
    }
  },
  initialStore
);

export default openKeysReducer;

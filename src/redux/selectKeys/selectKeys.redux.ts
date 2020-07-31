import { createActions, handleActions } from 'redux-actions';

export interface SelectKeysStore {
  selectKeys: string[];
}

const initialStore: SelectKeysStore = {
  selectKeys: []
};

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
    SETSELECTKEYS: (state: SelectKeysStore, action) => {
      return Object.assign({}, state, {
        selectKeys: action.payload
      });
    },
    CLEARSELECTKEYS: (state: SelectKeysStore, action) => {
      return Object.assign({}, state, {
        selectKeys: action.payload
      });
    }
  },
  initialStore
);

export default selectKeysReducer;

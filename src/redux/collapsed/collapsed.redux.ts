import { createActions, handleActions } from 'redux-actions';

export interface CollapsedStore {
  collapsed: boolean;
}

const initialStore: CollapsedStore = {
  collapsed: false
};

export const { changecollapsed, clearcollapsed } = createActions({
  CHANGECOLLAPSED: (collapsed: boolean) => {
    return collapsed;
  },
  CLEARCOLLAPSED: () => {
    return false;
  }
});

const collapsedReducer = handleActions(
  {
    CHANGECOLLAPSED: (state: CollapsedStore, action) => {
      return Object.assign({}, state, {
        collapsed: action.payload
      });
    },
    CLEARCOLLAPSED: (state: CollapsedStore, action) => {
      return Object.assign({}, state, {
        collapsed: action.payload
      });
    }
  },
  initialStore
);

export default collapsedReducer;

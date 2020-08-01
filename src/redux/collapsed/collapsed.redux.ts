import { createActions, handleActions } from 'redux-actions';

const collapsed: boolean = false;
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
    CHANGECOLLAPSED: (state: boolean, action) => {
      return action.payload;
    },
    CLEARCOLLAPSED: (state: boolean, action) => {
      return action.payload;
    }
  },
  collapsed
);

export default collapsedReducer;

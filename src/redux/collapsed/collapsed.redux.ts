import { createActions, handleActions } from 'redux-actions';
import { CHANGE_COLLAPSED, CLEAR_STORE } from '../actionTypes';

const collapsed: boolean = false;
const collapsedAction = createActions({
  [CHANGE_COLLAPSED]: (collapsed: boolean) => {
    return collapsed;
  },
  [CLEAR_STORE]: () => {
    return false;
  }
});
// console.log(collapsedAction);
export const changeCollapsed = collapsedAction.changeCollapsed;
export const clearCollapsedStore = collapsedAction.clearStore;

const collapsedReducer = handleActions(
  {
    [CHANGE_COLLAPSED]: (state: boolean, action) => {
      return action.payload;
    },
    [CLEAR_STORE]: (state: boolean, action) => {
      return action.payload;
    }
  },
  collapsed
);

export default collapsedReducer;

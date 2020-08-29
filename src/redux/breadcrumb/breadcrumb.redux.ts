import { createActions, handleActions } from 'redux-actions';
import {
  CHANGE_BREADCRUMB,
  RESET_BREADCRUMB,
  CLEAR_STORE
} from '../actionTypes';
interface BreadcrumbStore {
  path?: string;
  name: string;
}

const breadcrumb: BreadcrumbStore[] = [];

const breadcrumbAction = createActions({
  [CHANGE_BREADCRUMB]: (breadcrums: BreadcrumbStore[]) => {
    return breadcrums;
  },
  [RESET_BREADCRUMB]: (breadcrums: BreadcrumbStore[]) => {
    return breadcrums;
  },
  [CLEAR_STORE]: () => {
    return [];
  }
});
export const changeBreadcrumb = breadcrumbAction.changeBreadcrumb;
export const resetBreadcrumb = breadcrumbAction.resetBreadcrumb;
export const clearBreadcrumbStore = breadcrumbAction.clearStore;

const breadcrumbReducer = handleActions(
  {
    [CHANGE_BREADCRUMB]: (state: BreadcrumbStore[], action: any) => {
      return [...state, action.payload];
    },
    [RESET_BREADCRUMB]: (state: BreadcrumbStore[], action) => {
      return action.payload.length > 0 ? [...action.payload] : [];
    },
    [CLEAR_STORE]: (state: BreadcrumbStore[], action) => {
      return action.payload;
    }
  },
  breadcrumb
);

export default breadcrumbReducer;

import { createActions, handleActions } from 'redux-actions';

const breadcrumb: { path?: string; name: string }[] = [];

export const {
  changebreadcrumb,
  resetbreadcrumb,
  clearbreadcrumb
} = createActions({
  CHANGEBREADCRUMB: (breadcrums: { path?: string; name: string }[]) => {
    return breadcrums;
  },
  RESETBREADCRUMB: (breadcrums: { path?: string; name: string }[]) => {
    return breadcrums;
  },
  CLEARBREADCRUMB: () => {
    return [];
  }
});

const breadcrumbReducer = handleActions(
  {
    CHANGEBREADCRUMB: (
      state: { path?: string; name: string }[],
      action: any
    ) => {
      return [...state, action.payload];
    },
    RESETBREADCRUMB: (state: { path?: string; name: string }[], action) => {
      return Object.assign(state, action.payload);
    },
    CLEARBREADCRUMB: (state: { path?: string; name: string }[], action) => {
      return Object.assign(state, action.payload);
    }
  },
  breadcrumb
);

export default breadcrumbReducer;

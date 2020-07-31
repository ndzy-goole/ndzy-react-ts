import { createActions, handleActions } from 'redux-actions';

export interface BreadcrumbStore {
  breadcrumbs: { path?: string; name: string }[];
}

const initialStore: BreadcrumbStore = {
  breadcrumbs: []
};

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
    CHANGEBREADCRUMB: (state: BreadcrumbStore, action: any) => {
      return Object.assign({}, state, {
        breadcrumbs: [...state.breadcrumbs, ...action.payload]
      });
    },
    RESETBREADCRUMB: (state: BreadcrumbStore, action) => {
      return Object.assign({}, state, {
        breadcrumbs: action.payload
      });
    },
    CLEARBREADCRUMB: (state: BreadcrumbStore, action) => {
      return Object.assign({}, state, {
        breadcrumbs: action.payload
      });
    }
  },
  initialStore
);

export default breadcrumbReducer;

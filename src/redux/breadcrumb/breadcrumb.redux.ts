import { createActions, handleActions } from 'redux-actions';

export interface BreadcrumbStore {
  path?: string;
  name: string;
}

const initialStore: BreadcrumbStore[] = [
  {
    name: ''
  }
];

export const {
  changebreadcrumb,
  resetbreadcrumb,
  clearbreadcrumb
} = createActions({
  CHANGEBREADCRUMB: (breadcrums: BreadcrumbStore[]) => {
    return breadcrums;
  },
  RESETBREADCRUMB: (breadcrums: BreadcrumbStore[]) => {
    return breadcrums;
  },
  CLEARBREADCRUMB: () => {
    return [];
  }
});
const breadcrumbReducer = handleActions(
  {
    CHANGEBREADCRUMB: (state: BreadcrumbStore[], action) => {
      return [...state, ...action.payload];
    },
    RESETBREADCRUMB: (state: BreadcrumbStore[], action) => {
      return [...action.payload];
    },
    CLEARBREADCRUMB: (state: BreadcrumbStore[], action) => {
      return [...action.payload];
    }
  },
  initialStore
);

export default breadcrumbReducer;

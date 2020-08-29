import { clearAuthInfoStore } from '../redux/authInfo/authInfo.redux';
import { clearBreadcrumbStore } from '../redux/breadcrumb/breadcrumb.redux';
import { clearselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { clearopenkeys } from '../redux/openKeys/openKeys.redux';
import { clearCollapsedStore } from '../redux/collapsed/collapsed.redux';
import store from '../redux';
import { HISTORY_KEY } from '../constant/sysConstant';
import { remove } from '../utils';

export function clearStore() {
  store.dispatch(clearAuthInfoStore());
  store.dispatch(clearBreadcrumbStore());
  store.dispatch(clearselectkeys());
  store.dispatch(clearopenkeys());
  store.dispatch(clearCollapsedStore());
  remove(HISTORY_KEY);
}

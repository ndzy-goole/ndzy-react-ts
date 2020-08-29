import { authInfoAction } from '../redux/authInfo/authInfo.redux';
import { clearbreadcrumb } from '../redux/breadcrumb/breadcrumb.redux';
import { clearselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { clearopenkeys } from '../redux/openKeys/openKeys.redux';
import { clearcollapsed } from '../redux/collapsed/collapsed.redux';
import store from '../redux';
import { HISTORY_KEY } from '../constant/sysConstant';
import { remove } from '../utils';

export function clearStore() {
  store.dispatch(authInfoAction.clearStore());
  store.dispatch(clearbreadcrumb());
  store.dispatch(clearselectkeys());
  store.dispatch(clearopenkeys());
  store.dispatch(clearcollapsed());
  remove(HISTORY_KEY);
}

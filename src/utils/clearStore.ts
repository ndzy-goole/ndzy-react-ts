import { clearauthinfo } from '../redux/authInfo/authInfo.redux';
import { clearbreadcrumb } from '../redux/breadcrumb/breadcrumb.redux';
import { clearselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { clearopenkeys } from '../redux/openKeys/openKeys.redux';
import { clearcollapsed } from '../redux/collapsed/collapsed.redux';
import store from '../redux';
import utils from '../utils';
import { HISTORY_KEY } from '../constant/sysConstant';

export function clearStore() {
  utils.remove(HISTORY_KEY);
  store.dispatch(clearauthinfo());
  store.dispatch(clearbreadcrumb());
  store.dispatch(clearselectkeys());
  store.dispatch(clearopenkeys());
  store.dispatch(clearcollapsed());
}

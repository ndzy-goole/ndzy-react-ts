/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 08:53:14
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 09:04:08
 */
declare const window: {
  // ws--- gtlobal
  get_ie_str: any;
  get_ie_int: any;
  myEncode_build_login: any;
  myEncode_build_logout: any;
  myEncode_build_TimerEcho: any;
  // ---------------- WebSocket
  WebSocket: any;
  // ATClient 接口
  ATGetCallInfo: any;
  ATGetUidInfo_byExt: any;
  ATGetUidInfo: any;
};
import base from '../../base';
import { get_call_status } from '../utils';
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//表示外线状态发生变化，显示相应状态
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export function show_trunk_status(
  frmDetails: any,
  strTrunk: any,
  strStatus: any
) {
  var strDisp, strPrompt;
  var caller_code, ext_code, nDirection;

  var myCallInfo = window.ATGetCallInfo(
    base.loginInfo.login_uid,
    strTrunk,
    '',
    2
  );
  strStatus = myCallInfo.m_status;

  var lbl_name = get_call_status(strStatus);
  caller_code = myCallInfo.m_caller;
  ext_code = myCallInfo.m_called;
  nDirection = myCallInfo.m_direction;
  rem(
    '外线状态：' +
      lbl_name +
      '，主叫：' +
      caller_code +
      '，被叫：' +
      ext_code +
      '，方向：' +
      nDirection +
      '，isCHQ：' +
      myCallInfo.is_conf +
      myCallInfo.is_hold +
      myCallInfo.is_queue
  ); // + "，时长：" + document.ut_atocx.TrunkTimer);
}

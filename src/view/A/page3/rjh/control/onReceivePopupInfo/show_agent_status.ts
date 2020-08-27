/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 08:58:07
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 09:02:32
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
import { get_call_status } from '../utils';
import base from '../../base';
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//表示座席员状态发生变化，显示相应状态
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export function show_agent_status(
  frmDetails: any,
  strUid: any,
  strStatus: any
) {
  var myUidInfo = window.ATGetUidInfo(strUid);
  var user_uid = myUidInfo.m_uid;
  var user_ext = myUidInfo.m_ext;
  var user_name = myUidInfo.m_name;
  strStatus = myUidInfo.m_call_status;

  if (user_name == '') user_name = user_uid;
  if (user_name == '') user_name = user_ext;

  var lbl_name = get_call_status(strStatus);
  if (strUid == base.loginInfo.login_uid) IsCallDisconnect = 1;

  //01：可工作 02：置忙 03：事后处理 04：离席
  var UidStatus = myUidInfo.m_status;
  if (UidStatus == '01') UidStatus = '可工作';
  else if (UidStatus == '02') UidStatus = '置忙';
  else if (UidStatus == '03') UidStatus = '事后处理';
  else if (UidStatus == '04') UidStatus = '离席';
  else if (UidStatus == '06') UidStatus = '未准备好';
  else if (UidStatus == '00') UidStatus = '注销';
  rem(
    '座席状态：' +
      UidStatus +
      '，姓名：' +
      user_name +
      '，分机：' +
      user_ext +
      '，呼叫状态：' +
      lbl_name +
      '，isCHQ：' +
      myUidInfo.is_conf +
      myUidInfo.is_hold +
      myUidInfo.is_queue
  );
}

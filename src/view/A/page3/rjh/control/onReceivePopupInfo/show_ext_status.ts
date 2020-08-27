/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 08:56:03
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 09:02:40
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
  ATGetUidInfo:any
};
import { get_call_status } from '../utils';
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//表示分机状态发生变化，显示相应状态
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export function show_ext_status(frmDetails: any, strExt: any, strStatus: any) {
  //modify by zhangyr 20170526 在myweb中ATGetCallInfo存在缓存造成一秒内连续获取信息不及时,改用分机获取
  //var myCallInfo = ATGetCallInfo(login_uid, strExt, "", 1);
  var myCallInfo = window.ATGetUidInfo_byExt(strExt);
  var strUid = myCallInfo.m_uid; //ut_atocx.Ext_Uid;
  //不处理登录座席
  if (strUid != '') return;
  strStatus = myCallInfo.m_status;

  var lbl_name = get_call_status(strStatus);
  rem('分机状态：' + lbl_name + '，分机：' + strExt);
}

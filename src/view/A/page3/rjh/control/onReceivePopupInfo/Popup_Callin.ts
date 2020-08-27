/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 08:38:39
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 08:58:57
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
import base from '../../base';
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//表示弹屏态发生变化，显示相应状态  TODO: 只在该函数里面出现  myATClient_onReceiveCTI_EventChanged
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export function Popup_Callin(EventCode: string | number, EventData: any) {
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //表示其它坐席传来消息
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  if (EventCode == 5) {
    //表示其它坐席传来消息
    var strShortMsg = EventData;
    var strItem = strShortMsg;
    var nPos = strShortMsg.indexOf(';');
    if (nPos > 0) {
      strItem = strShortMsg.substring(0, nPos);
      strItem = strItem.toUpperCase();
    }

    if (strItem == 'SHORTMSG') {
      //接收短消息
      rem('接收公文：' + strShortMsg);
    } else if (strItem == 'TRANSMSG') {
      //转发工单
      rem('转发工单：' + strShortMsg);
    } else if (strItem == 'CALLBACK') {
      //用户远程通过网络预设呼叫
    } else {
      alert(strShortMsg);
    }
  }
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //表示有用户呼入信息
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  else if (EventCode == 6) {
    //表示有用户呼入信息：应用程序依靠此消息弹出用户资料
    var myCallInfo = window.ATGetCallInfo(
      base.loginInfo.login_uid,
      EventData,
      '',
      1
    );

    var strCallid = myCallInfo.m_callid; //ut_atocx.ExtCaller;
    var strCaller = myCallInfo.m_caller; //ut_atocx.ExtCaller;
    var chnum = myCallInfo.m_ext; //ut_atocx.ExtCode;
    var strInfo: any = myCallInfo.m_userinfo; //ut_atocx.Ext_UserInfo; //"PINPOPUP;FILTER=xxx;"

    var strPopupUrl =
      'callid=' + strCallid + '&caller=' + strCaller + '&info=' + strInfo;
    rem('来电信息：' + strPopupUrl);
  } else if (EventCode == 7) {
    //表示OEM传来消息
    var strSubKey = EventData;
    var strMsgInfo = ATGetOEMMessage(EventData); //ut_atocx.ATGetOEMMessage(EventData); // EventData OEM消息应为 “IVRTOAGENT”
    var strInfo: any = '';
    var strItem: any = strMsgInfo;
    var nPos: any = strMsgInfo.indexOf(';');
    if (nPos > 0) {
      strItem = strMsgInfo.substring(0, nPos);
      strItem = strItem.toUpperCase();
    }

    //alert(strSubKey+strMsgInfo);
    if (strSubKey == 'IVRTOAGENT') {
      if (strItem == 'VMS_RECV') {
        //接收传真消息
        strInfo = '您有一个新留言，单击此处可以查看';
      }
      if (strItem == 'FAX_RECV') {
        //接收传真消息
        strInfo = '您有一个新传真，单击此处可以查看';
      }
    } else if (strSubKey == 'SMSTOAGENT') {
      //即时消息信息
      strInfo = '您有一个新短信，单击此处可以查看';
    } else if (strSubKey == 'EMAILTOAGENT') {
      //接收EMAIL消息
      //var strCallid = GetItemValue(1, "CALLID", strMsgInfo);
      strInfo = '您有一个新邮件，单击此处可以查看,' + strCallid;
    } else if (strSubKey == 'CHATTOAGENT') {
      //接收Webcall-chat消息
      strInfo = '在线客服,' + strMsgInfo;
    }
    if (strInfo.length > 0) rem('OEM传来消息：' + strInfo);
  }
  return false;
}

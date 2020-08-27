/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 09:01:13
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 09:05:27
 */

import { show_agent_status } from './show_agent_status';
import { show_trunk_status } from './show_trunk_status';
import { show_ext_status } from './show_ext_status';
import { Popup_Callin } from './Popup_Callin';

//Flex 调用JS的接口函数，函数名称必须为字母数字
export function onReceivePopupInfo(
  EventCode: any,
  EventData: any,
  EventInfo: any
) {
  myATClient_onReceiveCTI_EventChanged(EventCode, EventData);
  //var strDisp = "EventCode=" + EventCode + ",EventData=" + EventData+ ",EventInfo=" + EventInfo;
  //rem(strDisp);
}

//接收ATClient的消息
function myATClient_onReceiveCTI_EventChanged(EventCode: any, EventData: any) {
  var strDisp, strPrompt;
  var caller_code, ext_code, nDirection;
  var strStatus, lbl_name;
  var rc;
  switch (EventCode) {
    case 0: //显示信息
      break;

    case 1: //1：表示座席员状态发生变化，EventData 表示座席员工号
      strStatus = '';
      show_agent_status(document, EventData, strStatus);
      break;
    case 2: //表示座席员呼叫状态发生变化，EventData 表示座席员工号
      show_agent_status(document, EventData, strStatus);
      break;
    case 3: //3：表示外线状态发生变化，EventData 表示外线号码
      strStatus = '';
      show_trunk_status(document, EventData, strStatus);
      break;
    case 4: //4：表示分机状态发生变化，EventData 表示分机号
      strStatus = '';
      show_ext_status(document, EventData, strStatus);
      break;

    case 5: //5：表示其它座席传来消息，EventData 表示消息内容
      Popup_Callin(EventCode, EventData);
      break;

    case 6: //6：表示有用户呼入信息：应用程序依靠此消息弹出用户资料，EventData 表示分机号
      //if ((document.ut_atocx.ExtDirection == 2) || (document.ut_atocx.ExtDirection == 4)) break;
      Popup_Callin(EventCode, EventData);
      break;

    case 7: //7：表示有OEM呼入信息，可能是FAX、VMS、EMAIL、SMS、CHAT等
      Popup_Callin(EventCode, EventData);
      break;

    case 10: //10：表示呼叫进入排队，EventData 表示呼叫标识
      rem('呼叫进入排队' + EventData);
      break;
    case 11: //11：表示呼叫结束排队，EventData 表示呼叫标识
      rem('呼叫结束排队' + EventData);
      break;

    case 100: //100：表示与服务器的连接中断
      strDisp =
        '本座席与 CTI Server 的连接出现故障，请重新登录！ErrCode=' + EventData;
      if (isConnect_CTI > 0) {
        isConnect_CTI = -1;
        alert(strDisp);
      }
      //Connect_CTI();
      //client_login();
      break;
  }
}

/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 09:12:12
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 09:13:33
 */
import { ATConnect, ATCommandResult, ATDisconnect } from '../wsUtils';
function Connect_CTI() {
  //var strIP = $("#txtIP").val();
  //注意：应用程序 需要将strIP 赋给 ATClient_proxy.ashx 中的变量 strCTI_url = strIP;
  //      本demo 因为未用后台代码，需要手工改写。

  var strCTI_addr = ATGetCTIInfo('IPADDR_EX', '', 0);
  //strCTI_addr = "168.168.168.120:18005";

  var strRet = ATConnect(strCTI_addr);
  setTimeout('Connect_CTI_result()', 100); //异步函数,延时100s,再取结果
}

function Connect_CTI_result() {
  var strRet = ATCommandResult();
  if (strRet == 'OK') {
    rem('连接CTI服务器成功！');
  } else {
    alert(
      '与UltraCTI连接失败，请检查，原因：\n  1.网络连接是否正常.\n  2.UltraCTI工作是否正常.'
    );
  }
}

function DisConnect_CTI() {
  //document.ut_atocx.ATDisconnect();
  var strRet = ATDisconnect();
  return false;
}

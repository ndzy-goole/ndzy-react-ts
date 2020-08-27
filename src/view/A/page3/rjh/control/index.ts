//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//2009-05-27 升级到V400，使用ATClient控件
//2011-09-20 整理
//           记录通信数据日志：手工创建目录 C:\ATOCX\LOG_ULTRA_ECMA
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// var isConnect_CTI = 0;
// var nTimer_id;
// var login_uid, login_pwd, login_ext;
// var IsCallDisconnect = 0;

// window.onunload = function () {
//   $('#Prompt').val('');
// };

// 控件处理函数










// 状态设置
function AT_Command(strCmd) {
  if (isConnect_CTI < 1) {
    alert('请先连接CTI服务器!');
    return false;
  }
  switch (strCmd) {
    case 'Pickup':
      ATAnswer(login_uid, '');
      break;
    case 'Hangup':
      ATHangup(login_uid, '');
      break;
    case 'Pickup_dj':
      ATPickCall(login_uid, $('#txtTel').val(), '');
      break;
    case 'PlaceCall': //呼叫电话
      ATPlaceCall(login_uid, $('#txtTel').val());
      break;
    case 'HoldCall':
      ATHoldCall(login_uid);
      break;
    case 'RetriveCall':
      ATRetriveCall(login_uid, '');
      break;
    case 'TransCall': //单步转接
      ATTranCall(login_ext, $('#txtTel_tran').val());
      break;
    case 'ConsTrans': //协商转接
      ATConsTrans(login_uid, $('#txtTel_tran').val());
      break;
    case 'TranOver': //协商转接完成
      ATTranOver(login_uid, '');
      break;
    case 'TransIVR': //转接IVR
      var strIvr =
        'AC_SWITCHIVR;CALLID=;EXT=' +
        login_ext +
        ';IVRFILE=' +
        $('#txtIvrFile').val() +
        ';NODE=' +
        $('#txtIvrNode').val() +
        ';IVRMSG=自己定义;';
      ATTranCall_toIVR(login_uid, 0, '', strIvr, strIvr);
      break;
    case 'Conf_est': //单步建立会议
      ATConf_est(login_ext, $('#txtTel_conf').val());
      break;
    case 'ConsConf': //协商会议
      ATConsConf(login_uid, $('#txtTel_conf').val());
      break;
    case 'ConfOver': //协商会议完成
      ATConfOver(login_uid, '');
      break;

    case 'Insert': //强插
      ATInsert(login_uid, $('#txtTel_insert').val(), 1);
      break;
    case 'MoniExt': //监听
      ATInsert(login_uid, $('#txtTel_insert').val(), 2);
      break;
    case 'DisConnect':
      ATDiscCall(login_uid, $('#txtTel_insert').val(), '');
      break;

    case 'SendNote':
      var strSend =
        'SHORTMSG;FROM=' +
        login_uid +
        ';TO=' +
        $('#txtDest').val() +
        ';CALLID=12345678;SUB=' +
        $('#txtMsg').val();
      ATSendMsg(login_uid, $('#txtDest').val(), strSend);
      break;
    case 'SendEmail':
      var strSend =
        'EMAIL_SEND;GHID=' +
        login_uid +
        ';TO=' +
        $('#txtEmail').val() +
        ';SUBJ=测试邮件;MSG=' +
        $('#txtMsg').val();
      ATSendOEMCommand(login_uid, '', 'AGENTTOMCI', strSend);
      break;
    case 'SendSms':
      var strSend =
        'SMS_SEND;UID=' +
        login_uid +
        ';TEL=' +
        $('#txtMobile').val() +
        ';SUBJ=测试短信;BODY=' +
        $('#txtMsg').val();
      ATSendOEMCommand(login_uid, '', 'AGENTTOMCI', strSend);
      break;

    case 'SetBusy':
      ATSetBusy(login_uid, 1, $('#txtCause').val());
      break;
    case 'SetNoBusy':
      ATSetBusy(login_uid, 0, $('#txtCause').val());
      break;
    case 'SetLeave': //离席
      ATSetLeaveSeat(login_uid, 1, $('#txtCause').val());
      break;
    case 'SetNoLeave': //取消离席
      ATSetLeaveSeat(login_uid, 0, $('#txtCause').val());
      break;
    case 'AfterWorking': //进入事后处理
      ATSetAfterWorking(login_uid, 1, $('#txtCause').val());
      break;
    case 'AfterNoWorking': //取消事后处理
      ATSetAfterWorking(login_uid, 0, $('#txtCause').val());
      break;

    default:
      alert('未处理命令：' + strCmd);
      break;
  }
  return true;
}

// 清楚显示
function btn_Command(strCmd) {
  switch (strCmd) {
    case 'ClearDisp': //清除显示
      $('#Prompt').val('');
      break;
    default:
      alert('未处理命令：' + strCmd);
      break;
  }
  return true;
}

// 状态显示
function rem(strMsg: string) {
  //alert(strMsg);
  var myPrompt = document.getElementById('Prompt');
  if (myPrompt != null) myPrompt.innerText = myPrompt.innerText + '\n' + strMsg;
}

//function $(itemID) {
//    if (document.getElementById) {
//        return document.getElementById(itemID);
//    } else {
//        return document.all(itemID);
//    }
//}

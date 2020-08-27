//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//2009-05-27 升级到V400，使用ATClient控件
//2011-09-20 整理
//           记录通信数据日志：手工创建目录 C:\ATOCX\LOG_ULTRA_ECMA
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var isConnect_CTI = 0;
var nTimer_id;
var login_uid, login_pwd, login_ext;
var IsCallDisconnect = 0;

window.onunload = function () {
  $('#Prompt').val('');
};

// 控件处理函数
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

//座席登录
function client_login() {
  var validity = false; // assume valid

  login_uid = $('#txtUid').val();
  login_pwd = $('#txtPwd').val();
  login_ext = $('#txtExt').val();
  if (login_pwd == '') login_pwd = '';

  if (!check_empty(login_uid)) {
    alert('对不起，您输入的工号不正确！');
    return validity;
  }
  if (!check_empty(login_ext)) {
    alert('对不起，您输入的座席号码不正确！');
    return validity;
  }

  var strLoginGroup = '0';
  var strLoginInfo = 'COMPRESS=0;REG_GROUP=ALL;NOT_READY=0;';
  //var strLoginInfo = "PROTOCOL=1;COMPRESS=0;REG_GROUP=0;NOT_READY=0;";
  // COMPRESS=0，1-采用压缩传输数据，0-不压缩。
  // REG_GROUP=ALL，0，G1|G2|G3；  注册ACD组的消息，包括：座席、分机、中继、队列等。
  //        G1|G2|G3-表示监控指定组。
  //        ALL-监控所有消息
  //        0或空-和本座席相关的消息
  // NOT_READY=1，1-登入后不能接听电话，需要签入ATSetReady(uid,1),签出ATSetReady(uid,0)   0-登入后可以接听电话，不要要签入ATSetReady()

  //var Result = ATLogin(login_uid, login_pwd, login_ext, "0");
  var strRet = ATLogin_ex(
    login_uid,
    login_pwd,
    login_ext,
    strLoginGroup,
    strLoginInfo
  );
  setTimeout('client_login_result()', 2000); //异步函数,延时100s,再取结果
  nRetry_times = 0;
}

var nRetry_times = 0;
function client_login_result() {
  var validity = false; // assume valid
  var strRet = ATCommandResult();

  if (strRet == '') {
    nRetry_times += 1;
    if (nRetry_times < 20) {
      setTimeout('client_login_result()', 100);
      return;
    }
  }
  if (strRet == 'OK') {
    validity = true;
    isConnect_CTI = 1;
    rem('登录CTI成功！');
    nTimer_id = setTimeout('delay_1ms_timer()', 1000);
  } else if (strRet == 'ERROR_UID')
    alert('Local:登录失败，请检查工号是否正确！');
  else if (strRet == 'ERROR_PWD') alert('Local:登录失败，请检查密码是否正确！');
  else if (strRet == 'ERROR_REP') alert('Local:对不起，该帐号正在使用！');
  else if (strRet == 'FAIL')
    alert('Local:登录失败，请检查工号或密码是否正确！');
  else
    alert('Local:登录失败(' + strRet + ')，请检查 CTI Server 是否运行正常！');
  return validity;
}

//座席登出
function client_logout() {
  var validity = true; // assume valid
  if (isConnect_CTI > 0) {
    //ATLogout(login_uid);
    var Result = ATLogout_ex(login_uid);
    isConnect_CTI = 0;
    rem('座席成功退出');
  }
  return validity;
}

function check_empty(text) {
  return text.length > 0; // 如果为空则返回错误
}

function delay_1ms_timer() {
  if (isConnect_CTI == -1) {
    client_login();
    return 1; //只提示一次
  }
  nTimer_id = setTimeout('delay_1ms_timer()', 1000);
  return 1;
}





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
function rem(strMsg) {
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

/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 09:10:04
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 09:16:11
 */
import base from '../base';

function delay_1ms_timer() {
  if (base.isConnect_CTI == -1) {
    client_login();
    return 1; //只提示一次
  }
  nTimer_id = setTimeout('delay_1ms_timer()', 1000);
  return 1;
}

function check_empty(text: any) {
  return text.length > 0; // 如果为空则返回错误
}

//座席登出
function client_logout() {
  var validity = true; // assume valid
  if (isConnect_CTI > 0) {
    //ATLogout(login_uid);
    var Result = ATLogout_ex(base.loginInfo.login_uid);
    isConnect_CTI = 0;
    rem('座席成功退出');
  }
  return validity;
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

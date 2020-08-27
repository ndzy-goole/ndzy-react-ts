/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 08:28:35
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 08:44:34
 */
class Base {
  // ws
  ATClient_ws: any;
  pmAgent_Uid: string;
  pmAgent_Result: any;
  bWait_conn_echo: boolean;
  m_dtLast_timer: number;
  m_dtLast_timer_send: number;
  //
  isConnect_CTI: string | number;
  nTimer_id: any;
  loginInfo: {
    login_uid: string | number;
    login_pwd: string | number;
    login_ext: string | number;
  };
  IsCallDisconnect: number;
  nRetry_times: number;

  // var nRetry_times = 0;

  constructor() {
    this.ATClient_ws;
    this.pmAgent_Uid = '';
    this.pmAgent_Result;
    this.bWait_conn_echo = false;
    this.m_dtLast_timer = 0;
    this.m_dtLast_timer_send = 0;
    //
    this.isConnect_CTI = 0;
    this.loginInfo = {
      login_uid: '',
      login_pwd: '',
      login_ext: ''
    };
    this.IsCallDisconnect = 0;
    this.nRetry_times = 0;
  }
}

// 单例模式
const base = (function () {
  let instance: Base;

  return function () {
    instance = new Base();

    return instance;
  };
})();

export default base();

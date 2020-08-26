class Base {
  ATClient_ws: any;
  pmAgent_Uid: string;
  pmAgent_Result: any;
  bWait_conn_echo: boolean;
  m_dtLast_timer: number;
  m_dtLast_timer_send: number;
  constructor() {
    this.ATClient_ws;
    this.pmAgent_Uid = '';
    this.pmAgent_Result;
    this.bWait_conn_echo = false;
    this.m_dtLast_timer = 0;
    this.m_dtLast_timer_send = 0;
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

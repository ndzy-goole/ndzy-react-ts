import base from './base';
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
};
export function ATClient_available() {
  var a = false;
  if (base.ATClient_ws != null && base.ATClient_ws.readyState == 1) {
    a = true;
  }
  return a;
}

// ATLogin_ex  ATLogout_ex ATLogout_ex
export function ATClient_send(d: any) {
  var b = false;
  try {
    if (ATClient_available() == true) {
      base.ATClient_ws.send(d);
      var c = new Date();
      base.m_dtLast_timer_send = c.getTime();
      b = true;
    }
  } catch (a) {
    base.ATClient_ws.close();
    // TODO:onReceivePopupInfo
    // onReceivePopupInfo(
    //   100,
    //   'ATClient_ws \ufffd\ufffd\ufffd\u04f3\ufffd\ufffd\ufffd',
    //   '\ufffd\ufffd\ufffd\ufffd\u02a7\ufffd\ufffd'
    // );
  }
  return b;
}

export function ATTimerEcho(a: any, d: any) {
  var b = 'FAIL';
  if (ATClient_available() == true) {
    var c = window.myEncode_build_TimerEcho(a, d);
    ATClient_send(c);
    b = 'OK';
  }
  return b;
}

// onReceiveData_Changed
function onReceiveData_Changed_safe(l: any, f: any) {
  // TODO: 涉及到全局变量
  var g = '';
  var e;
  var h = l.byteLength;
  var m = new Uint8Array(l, 0);
  if (m[0] == 2 && m[1] == 16 && m[h - 1] == 3) {
    var j = 2;
    var o = (m[j++] << 8) | m[j++];
    m = new Uint8Array(l, j + 3, o);
    var i = window.get_ie_str(1, m, o);
    if (i == 'LOGIN' || i == 'LOGOUT') {
      var r = window.get_ie_str(3, m, o);
      e = window.get_ie_str(4, m, o);
      if (i == 'LOGIN') {
        if (r == '1') {
          base.pmAgent_Result = 'OK';
          // TODO: onReceivePopupInfo
          // onReceivePopupInfo(1, pmAgent_Uid, '01');
        } else {
          if (e.length > 0) {
            base.pmAgent_Result = e;
          }
        }
      } else {
        if (i == 'LOGOUT') {
          if (r == '1') {
            base.pmAgent_Result = 'OK';
            // TODO: onReceivePopupInfo
            // onReceivePopupInfo(1, pmAgent_Uid, '00');
          }
        }
      }
    } else {
      if (i == 'POPUP') {
        g = window.get_ie_str(200, m, o);
        var q = window.get_ie_int(27, m, o);
        var p = window.get_ie_str(28, m, o);
        var n = window.get_ie_str(59, m, o);
        if (q == 1 && g == base.pmAgent_Uid) {
          // TODO: onReceivePopupInfo
          // onReceivePopupInfo(1, g, n);
          return;
        } else {
          if (q == 2 && p == 'SETUP') {
            var b = n.split('|');
            if (b.length == 5) {
              var a = b[0];
              var c = b[1];
              var k = b[2];
              g = b[3];
              var d = b[4];
              if (d == '1') {
                // TODO: onReceivePopupInfo
                // onReceivePopupInfo(6, c, a);
                return;
              }
              if (c.length > 0) {
                // TODO: onReceivePopupInfo
                // onReceivePopupInfo(4, c, a);
                if (g.length > 0) {
                  // TODO: onReceivePopupInfo
                  // onReceivePopupInfo(2, g, a);
                }
              }
              if (k.length > 0) {
                // TODO: onReceivePopupInfo
                // onReceivePopupInfo(3, k, a);
              }
            }
            return;
          }
        }
        // TODO: onReceivePopupInfo

        // onReceivePopupInfo(q, p, n);
      } else {
        if (i == 'CONN_DATA') {
          var s = 'CONN_ECHO';
          ATTimerEcho(s, base.pmAgent_Uid);
        } else {
          if (i == 'CONN_ECHO') {
            base.bWait_conn_echo = false;
          }
        }
      }
    }
  }
}

export function onReceiveData_Changed(c: any, a: any) {
  try {
    onReceiveData_Changed_safe(c, a);
  } catch (b) {
    alert(b.message);
  }
}

export function check_echo_5s_timer() {
  if (ATClient_available() == true) {
    var a;
    var b = new Date();
    if (base.bWait_conn_echo == false) {
      a = b.getTime() - base.m_dtLast_timer_send;
      if (a > 25000) {
        ATTimerEcho('CONN_DATA', base.pmAgent_Uid);
        base.bWait_conn_echo = true;
        base.m_dtLast_timer = b.getTime();
        base.m_dtLast_timer_send = b.getTime();
      }
    } else {
      a = b.getTime() - base.m_dtLast_timer;
      if (a > 10000) {
        ATDisconnect();
        base.bWait_conn_echo = false;
        // TODO: onReceivePopupInfo
        // onReceivePopupInfo(
        //   100,
        //   'ATClient_ws \ufffd\ufffd\ufffd\u04f3\ufffd\ufffd\ufffd',
        //   'Wait CONN_ECHO timeout'
        // );
      }
    }
    setTimeout('check_echo_5s_timer()', 5000);
  }
}

// -------------------------- demojs 也可能引用 或者 引用

export function ATDisconnect() {
  var a = 'OK';
  if (base.ATClient_ws != null) {
    base.ATClient_ws.close();
  }
  base.ATClient_ws = null;
  return a;
}

export function ATCommandResult() {
  var a = base.pmAgent_Result;
  if (a.length > 0) {
    base.pmAgent_Result = '';
  }
  return a;
}

export function ATReady() {
  var a = 'FAIL';
  if (window.WebSocket) {
    a = 'OK';
  } else {
    a = 'WebSocket not supported by this browser!';
  }
  return a;
}

export function ATLogout_ex(c: any) {
  var a = 'FAIL';
  if (ATClient_available() == true) {
    var b = window.myEncode_build_logout(c);
    ATClient_send(b);
    a = 'OK';
    // TODO: onReceivePopupInfo
    // onReceivePopupInfo(1, pmAgent_Uid, '00');
  }
  return a;
}
export function ATLogin_ex(h: any, b: any, a: any, g: any, c: any) {
  var e = 'FAIL';
  if (ATClient_available() == true) {
    var f = window.myEncode_build_login(h, b, a, g, c);
    ATClient_send(f);
    e = 'OK';
    var d = new Date();
    base.m_dtLast_timer_send = d.getTime();
    base.m_dtLast_timer = d.getTime();
    setTimeout('check_echo_5s_timer()', 5000);
    base.pmAgent_Uid = h;
  }
  return e;
}

export function ATConnect(d: any) {
  var c = 'FAIL';
  var b = /^(\d+)\.(\d+)\.(\d+)\.(\d+):(\d+)$/g;
  if (b.test(d)) {
    if (base.ATClient_ws != null) {
      base.ATClient_ws = null;
    }
    if (base.ATClient_ws == null) {
      var a = 'ws://' + d;
      base.ATClient_ws = new WebSocket(a);
      base.ATClient_ws.binaryType = 'arraybuffer';
      base.ATClient_ws.onmessage = function (e: any) {
        onReceiveData_Changed(e.data, 0);
      };
      base.ATClient_ws.onclose = function (e: any) {
        // TODO: onReceivePopupInfo
        // onReceivePopupInfo(
        //   100,
        //   'ATClient_ws \ufffd\ufffd\ufffd\ufffd\ufffd\u0479\u0631\u0561\ufffd',
        //   e.code + '-' + e.reason
        // );
        base.ATClient_ws = null;
      };
      base.ATClient_ws.onerror = function (e: any) {
        // TODO: onReceivePopupInfo
        // onReceivePopupInfo(
        //   100,
        //   'ATClient_ws \ufffd\ufffd\ufffd\u04f3\ufffd\ufffd\ufffd',
        //   e.reason
        // );
        base.ATClient_ws = null;
      };
      base.ATClient_ws.onopen = function (e: any) {
        base.pmAgent_Result = 'OK';
      };
      c = 'OK';
    }
  }
  return c;
}

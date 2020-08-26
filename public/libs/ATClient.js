//2011.03.09 显示、处理Http控件消息
//           定义常用函数，便于其它JS调用
//2012.07.12 增加函数 ATGetGroupName() 根据工号，组号，取组名称    nType=0，ACD组  1，业务组
//           增加  is_hold,is_conf,is_queue 状态变量
//2015.01.15 增加 ATGetUidName(strUid)  peng
//2017.04.10 专为Java版CTI修改。与C#版CTI兼容
//2017.07.04 增加ATTranCall_mci(String, String, String) 函数
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//座席登录-登出
function ATLogin(strUid, strPwd, strExt, strGroup, strLoginInfo) {
    var data = { cmd: "ATLogin", uid: strUid, pwd: strPwd, ext: strExt, group: strGroup, info: strLoginInfo };
    var strJson = ATClient_http(data);
    //alert(Result);
    var strReturn = strJson.ret;
    if (strReturn != "OK") strReturn = strJson.data;
    return strReturn;
}

function ATLogout(strUid) {
    var data = { cmd: "ATLogout", uid: strUid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
//电话相关部分-软电话功能
function ATAnswer(strUid, strCallid) {
    var data = { cmd: "ATAnswer", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATHangup(strUid, strCallid) {
    var data = { cmd: "ATHangup", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATPickCall(strUid, strExt, strCallid) {
    var data = { cmd: "ATPickCall", uid: strUid, ext: strExt, called: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATPlaceCall(strUid, strCalled) {
    var data = { cmd: "ATPlaceCall", uid: strUid, called: strCalled };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATHoldCall(strUid) {
    var data = { cmd: "ATHoldCall", uid: strUid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATRetriveCall(strUid, strCallid) {
    var data = { cmd: "ATRetriveCall", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATTranCall(strExt, strExt_dest) {
    var data = { cmd: "ATTranCall", ext: strExt, ext_dest: strExt_dest };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATConsTrans(strUid, strExt_dest) {
    var data = { cmd: "ATConsTrans", uid: strUid, ext_dest: strExt_dest };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATTranOver(strUid, strCallid) {
    var data = { cmd: "ATTranOver", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATConsConf(strUid, strExt_dest) {
    var data = { cmd: "ATConsConf", uid: strUid, ext_dest: strExt_dest };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATConfOver(strUid, strCallid) {
    var data = { cmd: "ATConfOver", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
//主叫A与分机B正在通话时，执行此函数后，主叫A、分机B（strExt）、分机C（strExt_dest），一起进入会议。
function ATConf_est(strExt, strExt_dest) {
    var data = { cmd: "ATConf_est", ext: strExt, ext_dest: strExt_dest };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATInsert(strUid, strExt, nType) {
    var data = { cmd: "ATInsert", uid: strUid, ext: strExt, type: nType };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATDiscCall(strUid, strExt, strCallid) {
    var data = { cmd: "ATDiscCall", uid: strUid, ext: strExt, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATCallSwap(strUid, strCallid) {
    var data = { cmd: "ATCallSwap", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATCallReconnect(strUid, strCallid) {
    var data = { cmd: "ATCallReconnect", uid: strUid, callid: strCallid };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATSendDtmf(strUid, strDTMF) {
    var data = { cmd: "ATSendDtmf", uid: strUid, callid: strDTMF };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATDialDigit(strUid, strDigit) {
    var data = { cmd: "ATDialDigit", uid: strUid, callid: strDigit };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATTranCall_toIVR(strUid, strCh, strExt, strInfo) {
    var data = { cmd: "ATTranCall_toIVR", uid: strUid, ch: strCh, ext: strExt, info: strInfo };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
function ATJoinIVR_toCnf(strUid, strCh, strExt, strInfo) {
    var data = { cmd: "ATJoinIVR_toCnf", uid: strUid, ch: strCh, ext: strExt, info: strInfo };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

//座席员状态相关部分
function ATSetBusy(strUid, nBusy_state, strCause) {
    var data = { cmd: "ATSetBusy", uid: strUid, busy_state: nBusy_state, cause: strCause };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATSetLeaveSeat(strUid, nState, strCause) {
    var data = { cmd: "ATSetLeaveSeat", uid: strUid, state: nState, cause: strCause };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATSetAfterWorking(strUid, nState, strCause) {
    var data = { cmd: "ATSetAfterWorking", uid: strUid, state: nState, cause: strCause };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATSetReady(strUid, nState) {
    var data = { cmd: "ATSetReady", uid: strUid, state: nState };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATSendMsg(strUid, strUid_to, strMsg) {
    var data = { cmd: "ATSendMsg", uid: strUid, to: strUid_to, info: strMsg };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATSendOEMCommand(strUid, strUid_to, strSubKey, strMsg) {
    var data = { cmd: "ATSendOEMCommand", uid: strUid, to: strUid_to, key: strSubKey, info: strMsg };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

//读取相关信息部分
function ATGetPopup(strUid) {
    var data = { cmd: "ATGetPopup", uid: strUid };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

function ATGetOEMMessage(strUid) {
    var data = { cmd: "ATGetOEMMessage", uid: strUid };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//add by gaoww 20150116 增加随路数据设置
//参数说明：strCallid-设置随路数据的呼叫编号，为空时，则为当前工号的呼叫
//          strKey-设置随路数据的Key，可以支持多个Key1,key2...，多个Key用逗号分隔
//          strValue-设置随路数据Key所对应的Value值，多个Value1|Value2...，多个Value用竖线分隔
function ATSetUserInfo(strUid, strCallid, strKey, strValue) {
    var data = { cmd: "ATSetUserInfo", uid: strUid, callid: strCallid, key: strKey, value: strValue };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

//add by gaoww 20160413
function ATSetExtFeature(strExt, strFeatureData) {
    var data = { cmd: "ATSetExtFeature", ext: strExt, data: strFeatureData };
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}

function ATGetTrunk_list(strUid) {
    var data = { cmd: "ATGetTrunk_list", uid: strUid };
    var strJson = ATClient_http(data);
    //var strReturn = new typeUidInfo();
    var strReturn = "";  //2015-04-29 peng 修改bug
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//UID={0};NAME={1};EXT={2};STATUS={3};CALLSTATUS={4};", myAgent.Uid, myAgent.Name, myAgent.Ext, myAgent.Status, myAgent.CallStatus);
function ATGetUidInfo(strUid) {
    var data = { cmd: "ATGetUidInfo", uid: strUid };
    var strJson = ATClient_http(data);
    var strReturn = new typeUidInfo();
    var strRet = strJson.ret;
    if (strRet == "OK") {
        var strData = strJson.data;
        strReturn.m_uid = fun_substring(strData, "UID", 1);
        strReturn.m_name = fun_substring(strData, "NAME", 1);
        strReturn.m_ext = fun_substring(strData, "EXT", 1);
        strReturn.m_status = fun_substring(strData, "STATUS", 1);
        strReturn.m_call_status = fun_substring(strData, "CALLS", 1);
        strReturn.m_groups = fun_substring(strData, "GROUPS", 1);
        strReturn.is_hold = fun_substring(strData, "ISHOLD", 1);
        strReturn.is_conf = fun_substring(strData, "ISCONF", 1);
        strReturn.is_queue = fun_substring(strData, "ISQUEUE", 1);
        strReturn.m_ip = fun_substring(strData, "IP", 1); //add by gaoww 20170301 增加座席IP地址
	strReturn.len_nw = fun_substring(strData, "LEN_NW", 1);     //add by gaoww 20170504 增加不可工作状态持续时长获取
	strReturn.len_idle = fun_substring(strData, "LEN_IDLE", 1); //add by gaoww 20170504 增加空闲状态持续时长获取
	var session = fun_substring(strData, "SESSION", 1);
	if(session.length>0)
		strReturn.session = parseInt(session);
    }
    return strReturn;
}

function ATGetUidInfo_byExt(strExt) {
    var data = { cmd: "ATGetUidInfo_byExt", ext: strExt };
    var strJson = ATClient_http(data);
    var strReturn = new typeUidInfo();
    var strRet = strJson.ret;
    if (strRet == "OK") {
        var strData = strJson.data;
        strReturn.m_uid = fun_substring(strData, "UID", 1);
        strReturn.m_name = fun_substring(strData, "NAME", 1);
        strReturn.m_ext = fun_substring(strData, "EXT", 1);
        strReturn.m_status = fun_substring(strData, "STATUS", 1);
        strReturn.m_call_status = fun_substring(strData, "CALLS", 1);
        strReturn.m_groups = fun_substring(strData, "GROUPS", 1);
        strReturn.is_hold = fun_substring(strData, "ISHOLD", 1);
        strReturn.is_conf = fun_substring(strData, "ISCONF", 1);
        strReturn.is_queue = fun_substring(strData, "ISQUEUE", 1);
        strReturn.len_nw = fun_substring(strData, "LEN_NW", 1);     //add by gaoww 20170504 增加不可工作状态持续时长获取
	strReturn.len_idle = fun_substring(strData, "LEN_IDLE", 1); //add by gaoww 20170504 增加空闲状态持续时长获取
	var session = fun_substring(strData, "SESSION", 1);
	if(session.length>0)
           strReturn.session = parseInt(session);
    }
    return strReturn;
}

//读取呼叫信息,strParm的含义：nType=0-工号 1-座席 2-中继 5-MCI session
//CALLID={0};CALLER={1};CALLED={2};DIR={3};STATUS={4};EXT={5};TRUNK={6};INFO={7};UID={8};TIMER={9};
function ATGetCallInfo(strUid, strParm, strKey, nType) {
    var data = { cmd: "ATGetCallInfo", uid: strUid, ext: strParm, key: strKey, ntype: nType };
    var strJson = ATClient_http(data);

    var strReturn = new typeCallInfo();
    var strRet = strJson.ret;
    if (strRet == "OK") {
        var strData = strJson.data;
        strReturn.m_callid = fun_substring(strData, "CALLID", 1);
        strReturn.m_caller = fun_substring(strData, "CALLER", 1);
        strReturn.m_called = fun_substring(strData, "CALLED", 1);
        strReturn.m_direction = parseInt(fun_substring(strData, "DIR", 1));
        strReturn.m_status = fun_substring(strData, "STATUS", 1);
        strReturn.m_ext = fun_substring(strData, "EXT", 1);
        strReturn.m_trunk = fun_substring(strData, "TRUNK", 1);
        strReturn.m_userinfo = fun_substring(strData, "INFO", 1);
        strReturn.m_uid = fun_substring(strData, "UID", 1);
        strReturn.m_stime = fun_substring(strData, "TIME", 1);
        strReturn.is_hold = fun_substring(strData, "ISHOLD", 1);
        strReturn.is_conf = fun_substring(strData, "ISCONF", 1);
        strReturn.is_queue = fun_substring(strData, "ISQUEUE", 1);
        if(nType == 5)
        {
            strReturn.m_trunkcalled = fun_substring(strData, "GNAME", 1); //20170615 by peng 20150309 获取访客信息：webcall-访客ip,微信-访客昵称
        }
        else
        {
            strReturn.m_trunkcalled = fun_substring(strData, "TRUNKCALLED", 1); //20150121 add by gaoww 20150309 增加获取trunkcalled的属性
        }
    }
    return strReturn;
}

// 根据工号，组号，取组名称
// strUid：空-根据strGroup取组名称  不为空-取座席所属组名称
// strGroup 多个组用 | 隔开
//nType=0，ACD组  1，业务组 2，chat组，取不到再检查业务组
function ATGetGroupName(strUid, strGroup, nType) {
    var data = { cmd: "ATGetGroupName", uid: strUid, group: strGroup, ntype: nType };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//根据工号，取座席员名称
function ATGetUidName(strUid) {
    var data = { cmd: "ATGetUidName", uid: strUid };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//读取CTI信息,strKey的含义：strKey="IPADDR",CTI 代理地址,返回:IP:PORT,strParm,nType=未用
function ATGetCTIInfo(strKey, strParm, nType) {
    var data = { cmd: "ATGetCTIInfo", key: strKey, ext: strParm, ntype: nType };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    //if (strRet == "OK") strReturn = strJson.data;
    if (strRet == "OK") {
        strReturn = strJson.data;
        var myRegex = /^(\d+\.\d+\.\d+\.\d+):(\d+)\|REST$/g; //匹配IP地址的正则表达式
        if (myRegex.test(strReturn)) {
            var nPos = strReturn.indexOf("|");
            if (nPos > 0)
                strReturn = strReturn.substring(0, nPos);
            nPos = strReturn.indexOf(":");
            if (nPos > 0) {
                m_CTIRestfullURL = "http://" + strReturn.substring(0, nPos) + ":5051/ATC";
                setLookie("m_CTIRestfullURL", m_CTIRestfullURL);
            }
        }
    }
    return strReturn;
}

//获取 指定ACD组 在线座席工号
//strGroup：指定业务组，空-读取所有组；GP1-指定组；GP1|GP2|GP5-多个组   
//返回：UID1|UID2|uid3|UID4...
function ATGetUid_Online(strUid, strGroup) {
    var data = { cmd: "ATGetUid_Online", uid: strUid, group: strGroup };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}


// 系统实时消息-一天,通过数据库，从CDR读取 
// <param name="strDest">目标：空-所有； UID1,UID2,UID3-指定工号；Gxx1,Gxx2-指定ACD组号；</param>
// <param name="strKey">A-A项指标  B-A项指标  空-所有</param>
// <param name="strSdate">查询日期，默认当天</param>
// <returns>OK;CALLS={0};CALLS_IN={1};CALLS_OUT={2};QUEUES={3};QFAIL={4};ANS={5};OP_ANS={6};PC_LEN={7};CALL_LEN={8};CLEN_IN={9};CLEN_OUT={10};IDLE_LEN={11};LEAVE_LEN={12};BUSY_LEN={13};AFTER_LEN={14};</returns>
// 指标说明
//    A、0-呼叫总数，1-呼入总数，2-呼出总数，3-排队次数，4-排队失败数，5-呼入通话总数,6-呼入座席接起数，7-平均通话时长  - 系统参数，strDest 不起作用
//    B、10-总通话时长，11-呼入通话时长，12-呼出通话时长，13-登录时长，14-离席时长，15-置忙时长，16-事后处理时长        - 个人参数，strDest 起作用
function RPTGet_CDRInfo(strDest, strKey, strDate) {
    var data = { cmd: "RPTGet_CDRInfo", dest: strDest, key: strKey, sdate: strDate };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

// 系统实时消息-实时,通过CTI 输出
// <param name="strDest">目标：空-所有； UID1,UID2,UID3-指定工号；Gxx1,Gxx2-指定ACD组号；</param>
//    strKey = RPT_BASE
//      返回系统指标：FAIL;或OK;TRUNKS={0};IVRS={1};UIDS={2};QUEUES={3};ONLINE={4};IDLE={5};LEAVE={6};BUSY={7};AFTER={8};
//                    C、外线占用数，IVR占用数，座席占用数，排队数 
//                    D、在线坐席总数，空闲坐席数，离席坐席数，置忙坐席数，事后处理坐席
//    strKey = RPT_UID
//      返回坐席员指标：FAIL;或
//                      OK; 工号=|登录时长|离席时长|置忙时长|事后处理时长|;   --获取CTI在线的，其它通过CDR获取
//                      如：OK;8600=|1|2|3|4|;8601=|12|13|14|15|;
function RPTGet_RTInfo(strDest, strKey) {
    var data = { cmd: "RPTGet_RTInfo", dest: strDest, key: strKey };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

// 系统坐席员状态-实时,通过CTI 输出
// <param name="strDest">目标：空-所有； UID1,UID2,UID3-指定工号；Gxx1,Gxx2-指定ACD组号；</param>
// 返回：[{工号1:UIDInfo,工号2:UIDInfo,工号3:UIDInfo,…….}]
//  UIDInfo 格式：UID={0};NAME={1};EXT={2};STATUS={3};CALLS={4};GROUPS={5};REG_GROUP={6};LTIME={7};CALLID={0};CALLER={1};CALLED={2};DIR={3};CALL_STATUS={4};TRUNK={5};INFO={6};
function RPTGet_UIDInfo(strDest, strKey) {
    var data = { cmd: "RPTGet_UIDInfo", dest: strDest, key: strKey };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//多媒体呼叫转移，本人正与客户交谈，将会话转给strUid_dest；strCallId 也可以是排队队列的会话
function ATTranCall_mci(strUid,  strUid_dest, strCallId) {
    var data = { cmd: "ATTranCall_mci", uid: strUid, uid_dest: strUid_dest,callid: strCallId};
    var strJson = ATClient_http(data);
    var strReturn = strJson.ret;
    return strReturn;
}
//读取指定ACD组上的排队列表
function  ATGetQueue_list(strGroup) {
    var data = { cmd: "ATGetQueue_list", group: strGroup};
    var strJson = ATClient_http(data);
    var strReturn = "OK";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//读取指定ACD组上的多媒体排队的排队列表
function  ATGetMCI_Queue_list(strGroup) {
    var data = { cmd: "ATGetMCI_Queue_list", group: strGroup};
    var strJson = ATClient_http(data);
    var strReturn = "OK";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//读取指定座席员所属的多媒体会话列表，strUid=空-读取所有会话
function ATGetMCI_Session_list(strUid){
    var data = { cmd: "ATGetMCI_Session_list", uid: strUid};
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}
//读取指定座席员所属的多媒体会话信息
function ATGetMCI_SessionInfo(strUid, strCallId)
{
    var data = { cmd: "ATGetMCI_SessionInfo", uid: strUid,callid: strCallId};
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//add by gaoww 增加获取系统信息接口
function ATGetSystemInfo(strData) {
    var data = { cmd: "ATGetSystemInfo", info: strData };
    var strJson = ATClient_http(data);
    var strReturn = "";
    var strRet = strJson.ret;
    if (strRet == "OK") strReturn = strJson.data;
    return strReturn;
}

//通过Http 协议，调用ATClient接口
function ATClient_http(data) {
    var strResult = "";
    //modify by gaoww 20180706 java定制
    var cti_url = ""; //"http://" + document.frmLogin.cti_ip.value + ":5052/";
    var strUrl = cti_url + "ATClient_proxy.do?jsoncallback=?";
    
    var strRest = GetCTIRestfullURL();
    //console.log("RestfullURL:" + strRest + ",cmd=" + data.cmd);
    if ((strRest!=null) && (strRest.indexOf("http://")>=0))
    {
        var strCmd = data.cmd;
        if ((strCmd == "ATGetCTIInfo") || (strCmd == "ATGetUidName") || (strCmd == "ATGetGroupName") || (strCmd.indexOf("RPTGet_") >= 0));
        else {
            return ATClient_restfull(strRest,data);
        }
    }

    $.ajaxSetup({ async: false });   //true:数据被IE缓存，改为false，每次都能取道新值。
    $.getJSON(strUrl,   //产生JSON数据的服务端页面
     data,              //向服务器发出的查询字符串（此参数可选）
     function(json) {                  //对返回的JSON数据进行处理，本例以列表的形式呈现
         strResult = json;
         //alert(strResult);
     });
    return strResult; 
}

//CTI服务器 Restfull 接口地址
var m_CTIRestfullURL = null;//"http://168.168.165.8:5051/ATC";
function GetCTIRestfullURL() {
  if(m_CTIRestfullURL == null)
   {
      var strRet = getLookie("m_CTIRestfullURL");
      if (strRet.indexOf("http://") >= 0) m_CTIRestfullURL = strRet;
   }
   return m_CTIRestfullURL;
}

function ATClient_restfull(strUrl,data) {
    var strResult = "";
    var strValue;

    var strCmd = data.cmd;
    if (strCmd == "ATGetCallInfo") {
    	var nType = data.ntype;
        if (nType == 1)
            data = { cmd: "ATGetCallInfo_byExt", ext: data.ext, key: data.key };
        else if (nType == 2)
            data = { cmd: "ATGetCallInfo_byTrunk",trunk: data.ext, key: data.key };
        else if (nType == 5)
            data = { cmd: "ATGetMCI_SessionInfo", uid: data.uid, key: data.key };
        else
            data = { cmd: "ATGetCallInfo", uid: data.uid, key: data.key };
    } 
    else if (strCmd == "ATGetTrunk_list") {
        data = { cmd: "ATGetTrunk_list" };
    }  
    else if (strCmd == "ATGetUid_Online") {
        data = { cmd: "ATGetUid_Online",group: data.group };
    }  

    for (var strKey in data) {
        strValue = data[strKey];
        if (typeof (strValue) == "string") {
            //if (strValue.indexOf(";") > 0) strValue = strValue.replace(/;/g, "%3b");
            strValue = encodeURIComponent(strValue);
            if (strValue.length < 1) strValue = "%20";
        }
        strUrl += "/" + strValue;
    }

    $.ajaxSetup({ async: false });   //true:数据被IE缓存，改为false，每次都能取道新值。
    $.getJSON(strUrl,   //产生JSON数据的服务端页面
    //data,              //向服务器发出的查询字符串（此参数可选）
     function(json) {                  //对返回的JSON数据进行处理，本例以列表的形式呈现
        strResult = json;
        //console.log("response:" + strResult);
     });
    //console.log("return:" + strResult);
    return strResult;
}

function fun_substring(strLine, strItemName, nItem) {
    return GetItemValue(nItem, strItemName, strLine);
}

var GetItemValue = function (nItem, strItemName, strLine) {
    var nPos;
    var temp_char;
    var strReturn = "";
    var strBody;
    var strData;

    strData = strLine;
    strLine = strLine.toUpperCase();
    strItemName = strItemName.toUpperCase();

    if (nItem == 0) {
        nPos = strLine.indexOf(";");
        if (nPos > 0) {
            strReturn = strLine.substring(0, nPos);
            //strReturn.Trim();
            strReturn = strReturn.toUpperCase();
        }
    }
    if (nItem == 1) {
        nPos = strLine.indexOf(";");
        if (nPos >= 0) {
            strBody = strLine.substring(0, nPos);
            nPos = strBody.indexOf("=");
            if (nPos >= 0)  //符合XXX=XXX; 取整串字符
            {
                strBody = strLine;
            }
            else //不符合XXX=XXX; 取;之后字符
            {
                nPos = strLine.indexOf(";");
                strBody = strLine.substr(nPos + 1);
            }
        }
        else {
            strBody = strLine;
        }
        nPos = -1;
        while (true) {
            nPos = strBody.indexOf(strItemName, nPos + 1);
            if (nPos >= 0) {
                /*
                if(nPos>0) //前一个字符不是A-Z,a-z
                {
                temp_char = strBody[nPos-1];  
                if(Char.IsLetter(temp_char)) continue;
                }//后一个字符不是A-Z,a-z
                temp_char = strBody[nPos+strItemName.Length-1];  
                if(Char.IsLetter(temp_char)) 
                {
                temp_char = strBody[nPos+strItemName.Length];  
                if(Char.IsLetter(temp_char)) continue;
                }
                */
                strBody = strBody.substr(nPos);
                nPos = strBody.indexOf(";");
                if (nPos > 1) {
                    strBody = strBody.substring(0, nPos);
                    nPos = strBody.indexOf("=");
                    if (nPos > 0) {
                        strReturn = strBody.substr(nPos + 1);
                        //strReturn.Trim();
                        nPos = strLine.indexOf(strReturn);
                        if (nPos > 1) {
                            strReturn = strData.substr(nPos, strReturn.length);
                        }
                    }
                }
            }
            break;
        } //end while 
    }
    if (nItem == 2) {
        nPos = strLine.indexOf(";");
        if (nPos >= 0) {
            strBody = strLine.substring(0, nPos);
            nPos = strBody.indexOf("=");
            if (nPos >= 0)  //符合XXX=XXX; 取整串字符
            {
                strBody = strLine;
            }
            else //不符合XXX=XXX; 取;之后字符
            {
                nPos = strLine.indexOf(";");
                strBody = strLine.substr(nPos + 1);
            }
        }
        else {
            strBody = strLine;
        }
        nPos = -1;
        while (true) {
            nPos = strBody.indexOf(strItemName, nPos + 1);
            if (nPos >= 0) {
                strBody = strBody.substr(nPos);
                nPos = strBody.indexOf("=");
                if (nPos > 1) {
                    strReturn = strBody.substr(nPos + 1);
                    //strReturn.Trim();
                    //	strReturn.MakeUpper();
                    var nLen = strReturn.length;
                    nPos = strLine.indexOf(strReturn);
                    if (nPos > 1) {
                        strReturn = strData.substr(nPos, nLen);
                        if (strReturn.lastIndexOf(";") == (nLen - 1)) //去除最后的 ';'
                            strReturn = strReturn.substr(0, (nLen - 1));
                    }
                }
            }
            break;
        } //end while
    }
    if (nItem == 3) {
        nPos = strLine.indexOf(";");
        if (nPos >= 0) {
            strBody = strLine.substring(0, nPos);
            nPos = strBody.indexOf("=");
            if (nPos >= 0)  //符合XXX=XXX; 取整串字符
            {
                strBody = strLine;
            }
            else //不符合XXX=XXX; 取;之后字符
            {
                nPos = strLine.indexOf(";");
                strBody = strLine.substr(nPos + 1);
            }
        }
        else {
            strBody = strLine;
        }
        nPos = -1;
        while (true) {
            nPos = strBody.indexOf(strItemName, nPos + 1);
            if (nPos >= 0) {
                strReturn = strBody.substr(nPos + 1);
                //strReturn.trim();
            }
            break;
        }
    } //end while
    return strReturn;
}

//************************************
//呼叫结构
//************************************
function typeCallInfo() {
    this.m_callid = "";
    this.m_caller = "";
    this.m_called = "";
    this.m_direction = 0;  //方向  0-未知 1-呼入 2-呼出  
    this.m_status = "01";    //状态，0表示状态未发生变化
    //呼叫状态分为以下几种：
    //        01：空闲状态
    //        02：摘机状态
    //        03：振铃状态
    //        04：回铃状态
    //        05：通话状态
    //        06：断开状态
    //        07：占用状态
    this.m_stime = "";       //呼叫开始时间
    this.m_ext = "";
    this.m_trunk = "";
    this.m_trunkcalled = ""; //add by gaoww 20150121 增加trunkcalled属性获取（注：需要配合今天之后的cti程序）
    this.m_userinfo = "";    //表示CTI服务器传过来的随路信息，可以是IVR信息，如用户输入的订单号等。
    this.m_uid = "";         //正在通话的Uid
    this.m_timer = "";
    //2012-07-16  增加  is_hold,is_conf,is_queue 状态变量
    this.is_hold = "00";     //表示是否处于保持状态
    this.is_conf = "00";     //表示是否处于会议状态
    this.is_queue = "00";    //表示是否处于排队状态
}

//座席员结构
function typeUidInfo() {
    this.m_uid = "";
    this.m_name = "";
    this.m_ext = "";
    this.m_roles = 0;
    this.m_status = "00";    //状态，0表示状态未发生变化
    //00：已注销
    //01：可工作
    //02：置忙
    //03：事后处理
    //04：离席
    //05：预留占用，三秒钟状态未变，复原
    this.m_call_status = "00";   //状态，0表示状态未发生变化
    this.m_groups = "";          //ACD组号
    this.is_hold = "00";         //表示是否处于保持状态
    this.is_conf = "00";         //表示是否处于会议状态
    this.is_queue = "00";        //表示是否处于排队状态
    this.m_ip = "";              //座席ip地址
    this.len_nw = "00:00:00";    //表示不可工作状态持续时长 add by gaoww 20170504
    this.len_idle = "00:00:00";  //表示空闲状态持续时长   add by gaoww 20170504
    this.session = 0;                 //多媒体会话个数
}

//2015-07-20 为了安全和性能考虑，以后保存变量不再使用Cookie，改用HTML5 的 localStorage
//设置Cookie,expires-过期时间,单位:小时（暂不实现）
function setLookie(name, value, expires) {
    //if (typeof (window.localStorage) == "undefined")
    var isSupportLocalStorage = (('localStorage' in window) && (window['localStorage'] !== null));
    //支持本地存储的浏览器：IE8+、Firefox3.0+、Opera10.5+、Chrome4.0+、Safari4.0+、iPhone2.0+、Andrioid2.0+
    if (isSupportLocalStorage == true) {
        //如果cookie中要想存中文，不用escape(value)读出来会是乱码
        value = escape(value);
        window.localStorage.setItem(name, value);
    }
    else {
    }
}

function getLookie(name) {
    var isSupportLocalStorage = (('localStorage' in window) && (window['localStorage'] !== null));
    if (isSupportLocalStorage == true) {
        var result = window.localStorage.getItem(name);
        if (result == null) result = "";
        else result = unescape(result);
        return result;
    }
    else {
    }
}

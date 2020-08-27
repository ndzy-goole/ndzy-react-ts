/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-27 08:51:03
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-27 08:51:24
 */
export function get_call_status(strStatus: any) {
  var lbl_name;
  switch (strStatus) {
    case '01': //空闲
      lbl_name = '空闲';
      break;
    case '02': //应答
      lbl_name = '摘机';
      break;
    case '03': //振铃
      lbl_name = '振铃';
      break;
    case '04': //回铃
      lbl_name = '回铃';
      break;
    case '05': // 连接
      lbl_name = '通话';
      break;
    case '06': //断开
      lbl_name = '断开';
      break;
    case '07': //摘机
      lbl_name = '占用';
      break;
    case '08': //转移
      lbl_name = '转移';
      break;
    default:
      //未知
      lbl_name = '未知';
      break;
  }
  return lbl_name;
}

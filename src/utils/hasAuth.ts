/**
 * @description 判断用户权限
 * @param auth
 * @param authInfo
 */
export default function hasAuth(auth: string, authInfo: any[]): boolean {
  let bool = false;

  for (let i = 0; i < authInfo.length; i++) {
    let item = authInfo[i];

    if (item.auth === auth) {
      bool = true;
      break;
    }
  }

  // 没有配置权限key，默认有权限
  if (!auth) {
    bool = true;
  }

  return bool;
}

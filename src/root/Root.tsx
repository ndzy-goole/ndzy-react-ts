import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isArray } from 'underscore';

import Frame from './Frame';

import { historyBrowser, historyHash } from './history';
import { MyStore } from '../redux';
import { menuRouter, fullScreenRouter, errRouter } from './router';
import { setauthinfo } from '../redux/authInfo/authInfo.redux';
import {
  resetbreadcrumb,
  changebreadcrumb
} from '../redux/breadcrumb/breadcrumb.redux';
import { setselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';

import utils from '../utils';
import { HISTORY_KEY } from '../constant/sysConstant';
import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';

const history = {
  browser: historyBrowser,
  hash: historyHash
};

export interface RootProps {
  logo: (collapsed: boolean) => JSX.Element;
  headerHeight: number;
  headerComponent: JSX.Element | null;
  navType: 'tab' | 'breadcrumb';
  maxTabNum: number;
  historyType: 'browser' | 'hash';
  authInfo: any[];
  collapsed: boolean;
  breadcrumb: any[];
  resetbreadcrumb?: ActionFunctionAny<Action<any>>;
  changebreadcrumb?: ActionFunctionAny<Action<any>>;
  setselectkeys?: ActionFunctionAny<Action<any>>;
  setopenkeys?: ActionFunctionAny<Action<any>>;
  setauthinfo?: ActionFunctionAny<Action<any>>;
}

const mapStateToProps = (store: MyStore) => {
  const { authInfo, collapsed, breadcrumb } = store;
  return {
    authInfo,
    collapsed,
    breadcrumb
  };
};

export default connect(mapStateToProps, {
  resetbreadcrumb,
  setauthinfo,
  changebreadcrumb,
  setselectkeys,
  setopenkeys
})((props: RootProps) => {
  const clearStore = () => {
    utils.remove(HISTORY_KEY); //清除缓存的store数据
    // TODO: 重置 store
    // props.dispatch(clearStore());
  };

  /**
   * @description 设置权限信息
   * @param authInfo
   */
  const setAuthInfo = (authInfo: any[]) => {
    props.setauthinfo && props.setauthinfo(authInfo);
  };
  /**
   * @description 设置面包屑
   * @param data
   */
  const setBreadcrumb = (data: { path?: string; name: string }[] | string) => {
    if (isArray(data)) {
      props.resetbreadcrumb && props.resetbreadcrumb(data);
      return;
    }

    const pathInfo = props.breadcrumb.find((item) => {
      return item.path === data;
    });

    // tab形式的面包屑需要同步设置selectKeys
    let openKey = '';

    menuRouter.forEach((item) => {
      if (data.split('?')[0] === item.path) {
        if (!pathInfo) {
          props.changebreadcrumb &&
            props.changebreadcrumb({ path: data, name: item.title });
        }
        props.setselectkeys && props.setselectkeys([data]);
      } else if (data.includes(item.parent)) {
        openKey = item.parent;
      }
    });

    if (!props.collapsed) {
      props.setopenkeys && props.setopenkeys([openKey]);
    }
  };
  return (
    <Router history={history[props.historyType]}>
      <Switch>
        {/* 导航菜单下的子模块 */}
        {menuRouter.map((item) => {
          // TODO: 路由权限
          // if (!hasAuth(item.auth, props.authInfo)) {
          //   return null;
          // }

          return (
            <Route
              exact
              key={item.path}
              path={item.path}
              render={(routeProps) => {
                const C = item.component; //页面

                return (
                  <Frame {...props} {...routeProps}>
                    <C
                      {...routeProps}
                      clearStore={() => {
                        clearStore();
                      }}
                      setBreadcrumb={(data: any) => {
                        setBreadcrumb(data);
                      }}
                      setAuthInfo={(authInfo: any) => {
                        setAuthInfo(authInfo);
                      }}
                    />
                  </Frame>
                );
              }}
            />
          );
        })}

        {/* 全局模块 */}
        {fullScreenRouter.map((item) => {
          return (
            <Route
              exact
              key={item.path}
              path={item.path}
              render={(routeProps) => {
                const C = item.component;

                return (
                  <C
                    {...routeProps}
                    clearStore={() => {
                      clearStore();
                    }}
                    setBreadcrumb={(data: any) => {
                      setBreadcrumb(data);
                    }}
                    setAuthInfo={(authInfo: any) => {
                      setAuthInfo(authInfo);
                    }}
                  />
                );
              }}
            />
          );
        })}

        <Redirect exact path="/" to={{ pathname: '/login' }} />

        <Route
          render={(routeProps) => {
            let Error = errRouter[0].component;

            return (
              <Error
                {...routeProps}
                clearStore={() => {
                  clearStore();
                }}
                setBreadcrumb={(data: any) => {
                  setBreadcrumb(data);
                }}
                setAuthInfo={(authInfo: any) => {
                  setAuthInfo(authInfo);
                }}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
});

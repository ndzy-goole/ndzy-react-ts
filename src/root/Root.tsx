import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isArray } from 'underscore';
import Frame from './Frame';
import { historyBrowser, historyHash } from './history';
import { MyStore } from '../redux';
import { menuRouter, fullScreenRouter, errRouter } from './router';
import { setAuthInfo } from '../redux/authInfo/authInfo.redux';
import {
  changeBreadcrumb,
  resetBreadcrumb
} from '../redux/breadcrumb/breadcrumb.redux';
import { setselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';
import { hasAuth } from '../utils';
import { clearStore } from '../utils/clearStore';

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
  setAuthInfo?: ActionFunctionAny<Action<any>>;
  resetBreadcrumb?: ActionFunctionAny<Action<any>>;
  changeBreadcrumb?: ActionFunctionAny<Action<any>>;
  setselectkeys?: ActionFunctionAny<Action<any>>;
  setopenkeys?: ActionFunctionAny<Action<any>>;
}

const mapStateToProps = (store: MyStore) => {
  const { authInfo, collapsed, breadcrumb } = store;
  return {
    authInfo,
    collapsed,
    breadcrumb
  };
};

const Root = connect(mapStateToProps, {
  resetBreadcrumb,
  setAuthInfo,
  changeBreadcrumb,
  setselectkeys,
  setopenkeys
})((props: RootProps) => {
  /**
   * @description 设置面包屑
   * @param data
   */
  const handleSetBreadcrumb = (
    data: { path?: string; name: string }[] | string
  ) => {
    if (isArray(data)) {
      props.resetBreadcrumb && props.resetBreadcrumb(data);
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
          props.changeBreadcrumb &&
            props.changeBreadcrumb({ path: data, name: item.title });
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
          // 路由权限
          if (!hasAuth(item.auth, props.authInfo)) {
            return null;
          }
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
                        handleSetBreadcrumb(data);
                      }}
                      setAuthInfo={(authInfo: any) => {
                        props.setAuthInfo && props.setAuthInfo(authInfo);
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
                      handleSetBreadcrumb(data);
                    }}
                    setAuthInfo={(authInfo: any) => {
                      props.setAuthInfo && props.setAuthInfo(authInfo);
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
                  handleSetBreadcrumb(data);
                }}
                setAuthInfo={(authInfo: any) => {
                  props.setAuthInfo && props.setAuthInfo(authInfo);
                }}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
});
export default Root;

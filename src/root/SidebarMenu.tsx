import React from 'react';
import {
  Menu
  // Icon
} from 'antd';
import './styles/SidebarMenu.scss';
import { RouteChildrenProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';
import { setselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { changebreadcrumb } from '../redux/breadcrumb/breadcrumb.redux';

import { MyStore } from '../redux';
import { appConfig, menuRouter } from './router';
import { hasAuth } from '../utils';

import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';

interface Props extends RouteChildrenProps {
  collapsed: boolean;
  breadcrumb: any[];
  openKeys: string[];
  selectedKeys: string[];
  authInfo: {}[];
  setopenkeys?: ActionFunctionAny<Action<any>>;
  setselectkeys?: ActionFunctionAny<Action<any>>;
  changebreadcrumb?: ActionFunctionAny<Action<any>>;
}

const mapStateToProps = (store: MyStore) => {
  const { collapsed, breadcrumb, openKeys, selectedKeys, authInfo } = store;

  return {
    collapsed,
    breadcrumb,
    openKeys,
    selectedKeys,
    authInfo
  };
};

export default connect(mapStateToProps, {
  setopenkeys,
  setselectkeys,
  changebreadcrumb
})((props: Props) => {
  const selectedKeys = props.selectedKeys.map((key) => {
    return key.split('?')[0];
  });

  const handleOpen = (openKeys: string[]) => {
    // 去重
    props.setopenkeys && props.setopenkeys(Array.from(new Set(openKeys)));
  };

  const setBreadcrumb = (key: string) => {
    const pathInfo = props.breadcrumb.find((item) => {
      return item.path === key;
    });

    // 防止重复设置
    if (pathInfo) {
      return;
    }

    menuRouter.forEach((item) => {
      if (key.includes(item.path)) {
        props.changebreadcrumb &&
          props.changebreadcrumb({ path: key, name: item.title });
      }
    });
  };

  const handleMenu = (params: { key: string; selectedKeys: string[] }) => {
    props.history.push(params.key);
    props.setselectkeys && props.setselectkeys(params.selectedKeys);
    setBreadcrumb(params.key);
  };

  // 渲染导航列表
  const renderMenu = (menu: any[]): (JSX.Element | null)[] => {
    let router = menu.map((item) => {
      // 配置隐藏的页面不在侧边栏显示
      if (item.hidden || !hasAuth(item.auth, props.authInfo)) {
        return null;
      }

      if (item.subMenu) {
        return (
          <Menu.SubMenu
            key={item.key}
            title={
              <span>
                {/* TODO: 图标 */}
                {/* {item.icon && item.icon.includes('icon-') ? (
                  <i className={`menu-iconfont iconfont ${item.icon}`} />
                ) : item.icon ? (
                  <Icon type={item.icon} />
                ) : null} */}
                <span>{item.title}</span>
              </span>
            }
          >
            {renderMenu(item.subMenu)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key}>
          {/* TODO: 图标 */}

          {/* {item.icon && item.icon.includes('icon-') ? (
            <i className={`menu-iconfont iconfont ${item.icon}`} />
          ) : item.icon ? (
            <Icon type={item.icon} />
          ) : null} */}
          <span>{item.title}</span>
        </Menu.Item>
      );
    });

    return router;
  };
  return (
    <Menu
      className="layout-sidebar-menu"
      style={{ minHeight: '100%', width: '100%' }}
      mode="inline"
      theme="light"
      inlineCollapsed={props.collapsed}
      defaultOpenKeys={props.openKeys}
      defaultSelectedKeys={selectedKeys}
      openKeys={props.openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={(keys: any) => {
        handleOpen(keys);
      }}
      onSelect={(info: any) => {
        handleMenu(info);
      }}
    >
      {renderMenu(appConfig.menu)}
    </Menu>
  );
});

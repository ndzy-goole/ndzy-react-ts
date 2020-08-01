import React from 'react';
import {
  Menu
  // Icon
} from 'antd';
import { RouteChildrenProps } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';
import { setselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { changebreadcrumb } from '../redux/breadcrumb/breadcrumb.redux';

// import {
//   changeBreadcrumb,
//   setOpenKeys,
//   setSelectedKeys
// } from '../actions/sysActions';
import { MyStore } from '../redux';
import { appConfig, menuRouter } from './router';
import utils from '../utils';

interface Props extends RouteChildrenProps, DispatchProp {
  collapsed: boolean;
  breadcrumb: any[];
  openKeys: string[];
  selectedKeys: string[];
  authInfo: {}[];
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

// export default connect(mapStateToProps)(SidebarMenu);
export default connect(
  mapStateToProps,
  {}
)((props: Props) => {
  const selectedKeys = props.selectedKeys.map((key) => {
    return key.split('?')[0];
  });
  const handleOpen = (openKeys: string[]) => {
    props.dispatch(setopenkeys(openKeys));
  };

  const handleMenu = (params: { key: string; selectedKeys: string[] }) => {
    props.history.push(params.key);

    props.dispatch(setselectkeys(params.selectedKeys));
    setBreadcrumb(params.key);
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
        props.dispatch(changebreadcrumb({ path: key, name: item.title }));
      }
    });
  };
  // 渲染导航列表
  const renderMenu = (menu: any[]): (JSX.Element | null)[] => {
    let router = menu.map((item) => {
      // 配置隐藏的页面不在侧边栏显示
      if (item.hidden || !utils.hasAuth(item.auth, props.authInfo)) {
        return null;
      }

      if (item.subMenu) {
        return (
          <Menu.SubMenu
            key={item.key}
            title={
              <span>
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

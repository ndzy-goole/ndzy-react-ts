import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { RouteChildrenProps } from 'react-router-dom';
import PS from 'perfect-scrollbar';
import { throttle } from 'underscore';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { useMount, useUnmount } from 'ahooks';

import SidebarMenu from './SidebarMenu';
import Tabs from './Tabs';
import Breadcrumbs from './Breadcrumbs';

import { RootProps } from './Root';
import { changeCollapsed } from '../redux/collapsed/collapsed.redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';
import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';

// utils
import { getOpenKeys } from '../utils/root';

interface Props extends RootProps, RouteChildrenProps {
  collapsed: boolean;
  selectedKeys: string[];
  changeCollapsed?: ActionFunctionAny<Action<any>>;
  setopenkeys?: ActionFunctionAny<Action<any>>;
  [propsName: string]: any;
}

export default connect((state) => state, { changeCollapsed, setopenkeys })(
  (props: Props) => {
    const { collapsed, headerHeight } = props;
    const sidebarWidth = collapsed ? 56 : 220; //侧边栏收缩和展开的宽度
    const [menuScroll, setMenuScroll] = useState<any>();

    const handleCollapsedBtn = () => {
      props.changeCollapsed && props.changeCollapsed(!props.collapsed);
      if (props.collapsed) {
        props.setopenkeys &&
          props.setopenkeys(getOpenKeys(props.selectedKeys[0]));
      } else {
        props.setopenkeys && props.setopenkeys(setopenkeys([]));
      }
    };

    const setScrollbar = () => {
      try {
        const scrollNode = document.getElementById('menu-scrollbar');

        if (scrollNode) {
          setMenuScroll(new PS(scrollNode, { suppressScrollX: true }));
        }
      } catch (e) {
        // IE9不支持 PerfectScrollbar
      }

      window.onresize = throttle(() => {
        try {
          menuScroll.update();
        } catch (err) {
          // IE9不支持 PerfectScrollbar
        }
      }, 300);
    };
    useMount(() => {
      setScrollbar();
    });
    useUnmount(() => {
      window.onresize = null;

      menuScroll.destroy();
      setMenuScroll(null);
    });
    return (
      <div className="h-full w-full bg-gray-200 relative overflow-hidden ">
        {/* left */}
        {/* duration-300 过渡动画 */}
        <div
          className="h-full absolute top-0 left-0 bg-teal-500 duration-300"
          style={{ width: sidebarWidth }}
        >
          {/* logo */}
          <div className="relative" style={{ height: headerHeight }}>
            {props.logo(props.collapsed)}
          </div>
          {/* 导航菜单 */}
          <div
            id="menu-scrollbar"
            className="w-full relative overflow-hidden "
            style={{ height: `calc(100% - ${headerHeight + 40}px)` }}
          >
            <SidebarMenu {...props} />
          </div>
          {/* 收缩按钮 */}
          <div className="h-8 w-full text-center ">
            <span className=" text-2xl">
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={() => {
                    handleCollapsedBtn();
                  }}
                />
              ) : (
                <MenuFoldOutlined
                  onClick={() => {
                    handleCollapsedBtn();
                  }}
                />
              )}
            </span>
          </div>
        </div>
        {/* right */}
        <div
          className=" h-full absolute top-0"
          style={{
            width: `calc(100% - ${sidebarWidth}px)`,
            left: sidebarWidth
          }}
        >
          {/* 头部 */}
          <div
            className="w-full overflow-hidden relative bg-white border-b  p-4"
            style={{ height: headerHeight }}
          >
            {props.headerComponent}
          </div>
          {/* 头部导航栏 */}
          <div className="w-full overflow-hidden" style={{ height: 40 }}>
            {props.navType === 'tab' && <Tabs {...props} />}
            {props.navType === 'breadcrumb' && <Breadcrumbs {...props} />}
          </div>

          {/* 页面主体 */}
          <div
            className="w-full p-4 overflow-hidden"
            style={{ height: `calc(100% - ${headerHeight + 40}px)` }}
          >
            {props.children}
          </div>
        </div>
      </div>
    );
  }
);

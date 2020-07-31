// import React, { Component } from 'react';
// import { Menu, Icon } from 'antd';
// import { RouteChildrenProps } from 'react-router-dom';
// import { connect, DispatchProp } from 'react-redux';

// import { changeBreadcrumb, setOpenKeys, setSelectedKeys } from '../actions/sysActions';
// import { MyStore } from '../reducers';
// import { appConfig, menuRouter } from './router';
// import hasAuth from '../utils/hasAuth';

// interface Props extends RouteChildrenProps, DispatchProp {
//   collapsed: boolean,
//   breadcrumb: any[],
//   openKeys: string[],
//   selectedKeys: string[],
//   authInfo: {}[]
// }
// class SidebarMenu extends Component<Props> {
//   render() {
//     const selectedKeys = this.props.selectedKeys.map(key => {
//       return key.split('?')[0];
//     });

//     return (
//       <Menu
//         className="layout-sidebar-menu"
//         style={{ minHeight: '100%', width: '100%' }}
//         mode="inline"
//         theme="light"
//         inlineCollapsed={this.props.collapsed}
//         openKeys={this.props.openKeys}
//         selectedKeys={selectedKeys}
//         onOpenChange={this.handleOpen.bind(this)}
//         onSelect={this.handleMenu.bind(this)}>
//         {this.renderMenu(appConfig.menu)}
//       </Menu>
//     );
//   }

//   handleOpen(openKeys: string[]) {
//     this.props.dispatch(setOpenKeys(openKeys));
//   }

//   handleMenu(params: { key: string, selectedKeys: string[] }) {
//     this.props.history.push(params.key);

//     this.props.dispatch(setSelectedKeys(params.selectedKeys));
//     this.setBreadcrumb(params.key);
//   }

//   setBreadcrumb(key: string) {
//     const pathInfo = this.props.breadcrumb.find(item => {
//       return item.path === key;
//     });

//     // 防止重复设置
//     if (pathInfo) {
//       return;
//     }

//     menuRouter.forEach(item => {
//       if (key.includes(item.path)) {
//         this.props.dispatch(changeBreadcrumb({ path: key, name: item.title }));
//       }
//     });
//   }

//   // 渲染导航列表
//   renderMenu(menu: any[]): (JSX.Element | null)[] {
//     let router = menu.map(item => {
//       // 配置隐藏的页面不在侧边栏显示
//       if (item.hidden || !hasAuth(item.auth, this.props.authInfo)) {
//         return null;
//       }

//       if (item.subMenu) {
//         return (
//           <Menu.SubMenu
//             key={item.key}
//             title={
//               <span>
//                 {
//                   item.icon && item.icon.includes('icon-')
//                     ? (
//                       <i className={`menu-iconfont iconfont ${item.icon}`} />
//                     )
//                     : (
//                       item.icon ? <Icon type={item.icon} /> : null
//                     )
//                 }
//                 <span>{item.title}</span>
//               </span>
//             }>
//             {this.renderMenu(item.subMenu)}
//           </Menu.SubMenu>
//         );
//       }

//       return (
//         <Menu.Item key={item.key}>
//           {
//             item.icon && item.icon.includes('icon-')
//               ? (
//                 <i className={`menu-iconfont iconfont ${item.icon}`} />
//               )
//               : (
//                 item.icon ? <Icon type={item.icon} /> : null
//               )
//           }
//           <span>{item.title}</span>
//         </Menu.Item>
//       );
//     });

//     return router;
//   }
// }

// const mapStateToProps = (store: MyStore) => {
//   const { collapsed, breadcrumb, openKeys, selectedKeys, authInfo } = store;

//   return {
//     collapsed,
//     breadcrumb,
//     openKeys,
//     selectedKeys,
//     authInfo
//   };
// };

// export default connect(mapStateToProps)(SidebarMenu);

// ######
import React from 'react';

export default () => {
  return <div>ok</div>;
};

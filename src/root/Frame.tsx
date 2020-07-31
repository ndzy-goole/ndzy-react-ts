// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// import { RouteChildrenProps } from 'react-router-dom';
// import PS from 'perfect-scrollbar';
// import { throttle } from 'underscore';
// import 'perfect-scrollbar/css/perfect-scrollbar.css';
// import './frame.scss';

// import SidebarMenu from './SidebarMenu';
// import Tabs from './Tabs';
// import Breadcrumbs from './Breadcrumbs';

// import { RootProps } from './Root';
// import { changecollapsed } from '../redux/collapsed/collapsed.redux';
// import { setopenkeys } from '../redux/openKeys/openKeys.redux';
// import { menuRouter } from './router';

// interface Props extends RootProps, RouteChildrenProps {
//   collapsed: boolean;
//   selectedKeys: string[];
//   [propsName: string]: any;
// }

// interface Props extends RootProps, RouteChildrenProps {
//   collapsed: boolean;
//   selectedKeys: string[];
// }

// export default connect(
//   (state) => state,
//   {}
// )((props: Props) => {
//   const { collapsed, headerHeight } = props;
//   const sidebarWidth = collapsed ? 56 : 220; //侧边栏收缩和展开的宽度
//   const [menuScroll, setMenuScroll] = useState<any>();
//   const getOpenKeys = (path: string) => {
//     let openKey = '';

//     menuRouter.forEach((item) => {
//       if (item.path === path.split('?')[0]) {
//         openKey = item.parent;
//       }
//     });

//     return [openKey];
//   };

//   const handleCollapsedBtn = () => {
//     props.dispatch(changecollapsed(!props.collapsed));

//     if (props.collapsed) {
//       props.dispatch(setopenkeys(getOpenKeys(props.selectedKeys[0])));
//     } else {
//       props.dispatch(setopenkeys([]));
//     }
//   };

//   const setScrollbar = () => {
//     try {
//       const scrollNode = document.getElementById('menu-scrollbar');

//       if (scrollNode) {
//         setMenuScroll(new PS(scrollNode, { suppressScrollX: true }));
//       }
//     } catch (e) {
//       // IE9不支持 PerfectScrollbar
//     }

//     window.onresize = throttle(() => {
//       try {
//         menuScroll.update();
//       } catch (err) {
//         // IE9不支持 PerfectScrollbar
//       }
//     }, 300);
//   };
//   return (
//     <div className="layout-frame">
//       <div className="layout-sidebar" style={{ width: sidebarWidth }}>
//         <div className="layout-logo" style={{ height: headerHeight }}>
//           {props.logo(props.collapsed)}
//         </div>
//         <div
//           id="menu-scrollbar"
//           className="layout-sidebar-content"
//           style={{ height: `calc(100% - ${headerHeight}px)` }}
//         >
//           <SidebarMenu {...props} />
//         </div>
//       </div>

//       <div
//         className="layout-right"
//         style={{ width: `calc(100% - ${sidebarWidth}px)` }}
//       >
//         <div className="layout-header" style={{ height: headerHeight }}>
//           {collapsed ? (
//             <MenuUnfoldOutlined
//               onClick={() => {
//                 handleCollapsedBtn();
//               }}
//             />
//           ) : (
//             <MenuFoldOutlined
//               onClick={() => {
//                 handleCollapsedBtn();
//               }}
//             />
//           )}

//           {props.headerComponent}
//         </div>

//         <div className="layout-breadcrumb" style={{ height: 40 }}>
//           {props.navType === 'tab' && <Tabs {...props} />}
//           {props.navType === 'breadcrumb' && <Breadcrumbs {...props} />}
//         </div>

//         <div
//           className="layout-content"
//           style={{ height: `calc(100% - ${headerHeight + 40}px)` }}
//         >
//           {props.children}
//         </div>
//       </div>
//     </div>
//   );
// });

// ######
import React from 'react';

export default () => {
  return <div>ok</div>;
};
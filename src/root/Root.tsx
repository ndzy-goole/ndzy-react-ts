// import React, { Component } from 'react';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect, DispatchProp } from 'react-redux';
// import { isArray } from 'underscore';

// import Frame from './Frame';

// import hasAuth from '../utils/hasAuth';
// import { historyBrowser, historyHash } from './history';
// import { MyStore } from '../reducers';
// import {
//   menuRouter,
//   fullScreenRouter,
//   errRouter
// } from './router';
// import {
//   setAuthInfo,
//   resetBreadcrumb,
//   changeBreadcrumb,
//   setSelectedKeys,
//   setOpenKeys,
//   clearStore
// } from '../actions/sysActions';
// import { remove } from '../utils/storage';
// import { HISTORY_KEY } from '../constant/sysConstant';

// const history = {
//   browser: historyBrowser,
//   hash: historyHash
// };

// export interface RootProps extends DispatchProp {
//   logo: (collapsed: boolean) => JSX.Element,
//   headerHeight: number,
//   headerComponent: JSX.Element | null,
//   navType: 'tab' | 'breadcrumb',
//   maxTabNum: number,
//   historyType: 'browser' | 'hash',
//   authInfo: any[],
//   collapsed: boolean,
//   breadcrumb: any[]
// }

// class Root extends Component<RootProps>{
//   render() {
//     return (
//       <Router history={history[this.props.historyType]}>
//         <Switch>
//           {/* 导航菜单下的子模块 */}
//           {
//             menuRouter.map(item => {
//               if (!hasAuth(item.auth, this.props.authInfo)) {
//                 return null;
//               }

//               return (
//                 <Route
//                   exact
//                   key={item.path}
//                   path={item.path}
//                   render={
//                     routeProps => {
//                       const C = item.component; //页面

//                       return (
//                         <Frame {...this.props} {...routeProps}>
//                           <C
//                             {...routeProps}
//                             clearStore={this.clearStore.bind(this)}
//                             setBreadcrumb={this.setBreadcrumb.bind(this)}
//                             setAuthInfo={this.setAuthInfo.bind(this)} />
//                         </Frame>
//                       );
//                     }
//                   } />
//               );
//             })
//           }

//           {/* 全局模块 */}
//           {
//             fullScreenRouter.map(item => {
//               return (
//                 <Route
//                   exact
//                   key={item.path}
//                   path={item.path}
//                   render={
//                     routeProps => {
//                       const C = item.component;

//                       return (
//                         <C
//                           {...routeProps}
//                           clearStore={this.clearStore.bind(this)}
//                           setBreadcrumb={this.setBreadcrumb.bind(this)}
//                           setAuthInfo={this.setAuthInfo.bind(this)} />
//                       );
//                     }
//                   } />
//               );
//             })
//           }

//           <Redirect
//             exact
//             path="/"
//             to={{ pathname: '/login' }}
//           />

//           <Route
//             render={
//               routeProps => {
//                 let Error = errRouter[0].component;

//                 return (
//                   <Error
//                     {...routeProps}
//                     clearStore={this.clearStore.bind(this)}
//                     setBreadcrumb={this.setBreadcrumb.bind(this)}
//                     setAuthInfo={this.setAuthInfo.bind(this)} />
//                 );
//               }
//             } />
//         </Switch>
//       </Router>
//     );
//   }

//   clearStore() {
//     remove(HISTORY_KEY); //清除缓存的store数据
//     this.props.dispatch(clearStore());
//   }

//   // 设置权限信息
//   setAuthInfo(authInfo: any[]) {
//     this.props.dispatch(setAuthInfo(authInfo));
//   }

//   setBreadcrumb(data: { path?: string, name: string }[] | string) {
//     if (isArray(data)) {
//       this.props.dispatch(resetBreadcrumb(data));
//       return;
//     }

//     const pathInfo = this.props.breadcrumb.find(item => {
//       return item.path === data;
//     });

//     // tab形式的面包屑需要同步设置selectKeys
//     let openKey = '';

//     menuRouter.forEach(item => {
//       if (data.split('?')[0] === item.path) {
//         if (!pathInfo) {
//           this.props.dispatch(changeBreadcrumb({ path: data, name: item.title }));
//         }

//         this.props.dispatch(setSelectedKeys([data]));
//       } else if (data.includes(item.parent)) {
//         openKey = item.parent;
//       }
//     });

//     if (!this.props.collapsed) {
//       this.props.dispatch(setOpenKeys([openKey]));
//     }
//   }
// }

// const mapStateToProps = (store: MyStore) => {
//   const { authInfo, collapsed, breadcrumb } = store;

//   return {
//     authInfo,
//     collapsed,
//     breadcrumb
//   };
// };

// export default connect(mapStateToProps)(Root);

// ######
import React from 'react';

export default () => {
  return <div>ok</div>;
};

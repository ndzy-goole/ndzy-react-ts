# ndzy-react-ts

```
分支合并
git merge --no-ff dev
```

# node-sass 等

yarn add react-app-rewired customize-cra babel-plugin-import less less-loader@5.0.0 node-sass

# antd

yarn add antd @ant-design/icons

# 加入路由的支持

yarn add react-router-dom @types/react-router-dom react-router

# html 样式优化

yarn add normalize.css

# axios

yarn add axios

# ahooks

yarn add ahooks

# redux

yarn add redux react-redux redux-promise redux-logger redux-actions @types/react-redux @types/redux-promise @types/redux-logger @types/redux-actions

# perfect-scrollbar

yarn add perfect-scrollbar @types/perfect-scrollbar

# underscore

yarn add underscore @types/underscore

# nedb

yarn add nedb
yarn add @types/nedb -D

# tailwindcss
yarn add tailwindcss postcss-cli autoprefixer -D

#

```
  // 设置面包屑参数
  const setBreadcrumb_ = () => {
    // breadcrumb形式设置格式
    // let arr = [
    //   { name: '面包屑名称1' },
    //   { path: '/a/a', name: '面包屑名称2' }
    // ];
    // setBreadcrumb(arr);
    // tab形式设置格式
    // setBreadcrumb('/moduleA/page3?a=1&b=2');
  };

// 
import { RouteChildrenProps } from 'react-router-dom';
interface Props extends RouteChildrenProps {
  setBreadcrumb: (data: { path?: string; name: string }[] | string) => void;
  setAuthInfo: (authInfo: any) => void;
  clearStore: () => void;
}
interface State {
  [propName: string]: any;
}
```

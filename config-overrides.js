const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

// const darkThemeVars = require("antd/dist/dark-theme");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 路径别名
  addWebpackAlias({
    ['@_c']: path.resolve(__dirname, 'src/component/'),
    ['@_v']: path.resolve(__dirname, 'src/view/'),
    ['@_u']: path.resolve(__dirname, 'src/utils/'),
    ['@']: path.resolve(__dirname, 'src')
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hack: `true;@import "${require.resolve(
        'antd/lib/style/color/colorPalette.less'
      )}";`
      // ...darkThemeVars,
      // "@primary-color": "#02b875"
    },
    localIdentName: '[local]--[hassh:base64:5]'
  })
);

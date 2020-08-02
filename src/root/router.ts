import ModuleAPage1 from '../view/moduleA/page1/ModuleAPage1';
import ModuleAPage2 from '../view/moduleA/page2/ModuleAPage2';
import ModuleAPage3 from '../view/moduleA/page3/ModuleAPage3';
import ModuleAPage4 from '../view/moduleA/page4/ModuleAPage4';
import ModuleAPage5 from '../view/moduleA/page5/ModuleAPage5';
import ModuleBPage1 from '../view/moduleB/page1/ModuleBPage1';
import ModuleC from '../view/moduleC/ModuleC';
import ModuleD from '../view/moduleD/ModuleD';

import Login from '../view/login/Login';

import ErrorPage from '../view/404/ErrorPage';

const appConfig = {
  '404': true,
  menu: [
    {
      key: '/moduleA',
      auth: '',
      title: '模块A',
      icon: 'icon-gongdan',
      subMenu: [
        {
          key: '/moduleA/page1',
          auth: '张一',
          title: '页面111111111111111111111111111111111111111111111111'
        },
        {
          key: '/moduleA/page2',
          auth: '',
          title: '页面2'
        },
        {
          key: '/moduleA/page3',
          title: '页面3'
          // hidden: true
        },
        {
          key: '/moduleA/page4',
          title: '页面4'
        },
        {
          key: '/moduleA/page5',
          title: '页面5'
        }
      ]
    },
    {
      key: '/moduleB',
      auth: '',
      title: '模块B',
      icon: 'appstore',
      subMenu: [
        {
          key: '/moduleB/page1',
          auth: '',
          title: 'moduleB页面1'
        }
      ]
    },
    {
      key: '/moduleC',
      auth: '',
      title: '模块C',
      icon: 'icon-gongdan'
    },
    {
      key: '/moduleD',
      auth: '',
      title: '模块D',
      icon: 'icon-gongdan'
    }
  ],
  fullScreen: [
    {
      key: '/login',
      title: '登录页'
    }
  ]
};

const menuRouter = [
  {
    path: '/moduleA/page1',
    auth: '张一',
    component: ModuleAPage1,
    parent: '/moduleA',
    title: '页面111111111111111111111111111111111111111111111111',
    hidden: false
  },
  {
    path: '/moduleA/page2',
    auth: '',
    component: ModuleAPage2,
    parent: '/moduleA',
    title: '页面2',
    hidden: false
  },
  {
    path: '/moduleA/page3',
    auth: '',
    component: ModuleAPage3,
    parent: '/moduleA',
    title: '页面3',
    hidden: false
  },
  {
    path: '/moduleA/page4',
    auth: '',
    component: ModuleAPage4,
    parent: '/moduleA',
    title: '页面4',
    hidden: false
  },
  {
    path: '/moduleA/page5',
    auth: '',
    component: ModuleAPage5,
    parent: '/moduleA',
    title: '页面5',
    hidden: false
  },
  {
    path: '/moduleB/page1',
    auth: '',
    component: ModuleBPage1,
    parent: '/moduleB',
    title: 'moduleB页面1',
    hidden: false
  },
  {
    path: '/moduleC',
    auth: '',
    component: ModuleC,
    parent: '',
    title: '模块C',
    hidden: false
  },
  {
    path: '/moduleD',
    auth: '',
    component: ModuleD,
    parent: '',
    title: '模块D',
    hidden: false
  }
];

const fullScreenRouter = [
  {
    path: '/login',
    auth: '',
    component: Login,
    title: '登录页'
  }
];

const errRouter = [
  {
    path: '/404',
    component: ErrorPage,
    title: '错误页面'
  }
];

export { menuRouter, fullScreenRouter, errRouter, appConfig };

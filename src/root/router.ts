import PageA1 from '@/view/A/page1';
import PageA2 from '@/view/A/page2';
import PageA3 from '../view/A/page3';
import PageA4 from '../view/A/page4';
import PageA5 from '../view/A/page5';
import PageB1 from '../view/B/page1';
import ModuleC from '../view/moduleC/ModuleC';
import ModuleD from '../view/moduleD/ModuleD';

import Login from '../view/login/Login';

import ErrorPage from '../view/404/ErrorPage';

const appConfig = {
  '404': true,
  menu: [
    {
      key: '/A',
      auth: '',
      title: 'A',
      icon: 'icon-gongdan',
      subMenu: [
        {
          key: '/A/page1',
          auth: '张一',
          title: '可编辑table'
        },
        {
          key: '/A/page2',
          auth: '',
          title: '页面2'
        },
        {
          key: '/A/page3',
          title: '页面3'
          // hidden: true
        },
        {
          key: '/A/page4',
          title: '页面4'
        },
        {
          key: '/A/page5',
          title: '页面5'
        }
      ]
    },
    {
      key: '/B',
      auth: '',
      title: 'B',
      icon: 'appstore',
      subMenu: [
        {
          key: '/B/page1',
          auth: '',
          title: 'class生命周期'
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
    path: '/A/page1',
    auth: '张一',
    component: PageA1,
    parent: '/A',
    title: '可编辑table',
    hidden: false
  },
  {
    path: '/A/page2',
    auth: '',
    component: PageA2,
    parent: '/A',
    title: '页面2',
    hidden: false
  },
  {
    path: '/A/page3',
    auth: '',
    component: PageA3,
    parent: '/A',
    title: '页面3',
    hidden: false
  },
  {
    path: '/A/page4',
    auth: '',
    component: PageA4,
    parent: '/A',
    title: '页面4',
    hidden: false
  },
  {
    path: '/A/page5',
    auth: '',
    component: PageA5,
    parent: '/A',
    title: '页面5',
    hidden: false
  },
  {
    path: '/B/page1',
    auth: '',
    component: PageB1,
    parent: '/B',
    title: 'class生命周期',
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

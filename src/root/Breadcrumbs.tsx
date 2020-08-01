import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { menuRouter } from './router';
import { setselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';
import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';

interface Props extends RouteChildrenProps {
  breadcrumb: any[];
  selectedKeys: string[];
  collapsed: boolean;
  setopenkeys?: ActionFunctionAny<Action<any>>;
  setselectkeys?: ActionFunctionAny<Action<any>>;
}

export default connect((state) => state, { setopenkeys, setselectkeys })(
  (props: Props) => {
    const getOpenKeys = (path: string) => {
      if (!path) {
        return [];
      }

      let openKey = '';

      menuRouter.forEach((item) => {
        if (item.path === path.split('?')[0]) {
          openKey = item.parent;
        }
      });

      return [openKey];
    };
    const handleClick = (path: string) => {
      if (path) {
        props.history.push(path);
        props.setselectkeys && props.setselectkeys([path]);

        // 侧边栏收缩时不设置openKey
        if (!props.collapsed) {
          props.setopenkeys && props.setopenkeys(getOpenKeys(path));
        }
      }
    };

    return (
      <div className="custom-breadcrumbs">
        <Breadcrumb>
          {props.breadcrumb.map((item, index) => {
            return (
              <Breadcrumb.Item key={index}>
                <span
                  className={item.path ? 'active' : ''}
                  onClick={() => {
                    handleClick(item.path);
                  }}
                >
                  {item.name}
                </span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  }
);

import React, { Component, createRef, MouseEvent } from 'react';
import { connect, DispatchProp } from 'react-redux';
// import { Icon } from 'antd';
import { RouteChildrenProps } from 'react-router-dom';
import { resetbreadcrumb } from '../redux/breadcrumb/breadcrumb.redux';
import { setselectkeys } from '../redux/selectKeys/selectKeys.redux';
import { setopenkeys } from '../redux/openKeys/openKeys.redux';

import { MyStore } from '../redux';
import { historyHash as history } from './history';
import { menuRouter } from './router';

interface Props extends DispatchProp, RouteChildrenProps {
  breadcrumb: any[];
  selectedKeys: string[];
  collapsed: boolean;
}
interface State {
  left: number;
  rightBtn: boolean;
  leftBtn: boolean;
}
class Tabs extends Component<Props, State> {
  moveNode = createRef<HTMLDivElement>();
  fixedNode = createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);

    this.state = {
      left: 1,
      rightBtn: true,
      leftBtn: true
    };
  }

  componentDidMount() {
    this.setTabsPosition();
  }

  render() {
    return (
      <div className="custom-tabs">
        {/* <Icon
          className={`custom-tabs-left ${
            this.state.leftBtn ? '' : 'notActive'
          }`}
          type="left"
          onClick={this.moveLeft.bind(this)}
        />
        <Icon
          className={`custom-tabs-right ${
            this.state.rightBtn ? '' : 'notActive'
          }`}
          type="right"
          onClick={this.moveRight.bind(this)}
        /> */}

        <div className="custom-tabs-wrap" ref={this.fixedNode}>
          <div
            className="custom-tabs-move"
            ref={this.moveNode}
            style={{ transform: `translateX(${this.state.left}px)` }}
          >
            {this.props.breadcrumb.map((item) => {
              let bool: boolean = item.path === this.props.selectedKeys[0];

              return (
                <div
                  className={`custom-tabs-item ${bool ? 'active' : ''}`}
                  key={item.path}
                  onClick={this.handleClick.bind(this, item.path)}
                >
                  {!bool && <span className="line"></span>}

                  <span className="text">{item.name}</span>

                  {/* 只是一个tab时不显示删除按钮 */}
                  {this.props.breadcrumb.length > 1 && (
                    <span>删除</span>
                    // <Icon
                    //   className="close-icon"
                    //   type="close"
                    //   onClick={this.handleCloseTab.bind(this, item.path)}
                    // />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  handleClick(path: string) {
    history.push(path);
    this.props.dispatch(setselectkeys([path]));

    // 侧边栏收缩时不设置openKey
    if (!this.props.collapsed) {
      this.props.dispatch(setopenkeys(this.getOpenKeys(path)));
    }
  }

  handleCloseTab(path: string, e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    let closeIndex = 0;
    const newBreadcrumb = this.props.breadcrumb.filter((item, index) => {
      if (item.path === path) {
        closeIndex = index;
      }

      return item.path !== path;
    });

    // 删除的是选中的tab时才重设openKey和selectKey
    if (this.props.selectedKeys.includes(path)) {
      let newPath = '';
      if (closeIndex - 1 > -1) {
        newPath = newBreadcrumb[closeIndex - 1].path;
      } else {
        newPath = newBreadcrumb[closeIndex].path;
      }

      // 侧边栏收缩时不设置openKey
      if (!this.props.collapsed) {
        console.log(this.getOpenKeys(path));
        this.props.dispatch(setopenkeys(this.getOpenKeys(newPath)));
      }
      this.props.dispatch(setselectkeys([newPath]));
      this.props.history.push(newPath);
    }

    this.props.dispatch(resetbreadcrumb(newBreadcrumb));
  }

  getOpenKeys(path: string) {
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
  }

  setTabsPosition() {
    const { fixedW, moveW } = this.getNodeNum();

    let len = fixedW - moveW;
    let nextLeft = len < 0 ? len : 1;

    this.setState({
      left: nextLeft,
      rightBtn: nextLeft > fixedW - moveW,
      leftBtn: nextLeft < 0
    });
  }

  moveLeft() {
    if (!this.state.leftBtn) {
      return;
    }

    const { moveLeft, fixedW, moveW } = this.getNodeNum();

    let nextLeft = moveLeft + fixedW;
    let leftBtn = true;

    if (nextLeft > 0) {
      nextLeft = 1;
      leftBtn = false;
    }

    this.setState({
      left: nextLeft,
      leftBtn,
      rightBtn: nextLeft > fixedW - moveW
    });
  }

  moveRight() {
    if (!this.state.rightBtn) {
      return;
    }

    const { moveLeft, fixedW, moveW } = this.getNodeNum();

    let nextLeft = moveLeft - fixedW;
    let rightBtn = true;

    if (nextLeft < fixedW - moveW) {
      nextLeft = fixedW - moveW;
      rightBtn = false;
    }

    this.setState({
      left: nextLeft,
      rightBtn,
      leftBtn: nextLeft < 0
    });
  }

  getNodeNum() {
    let fixedLeft = 0;
    let moveLeft = 0;
    let fixedW = 0;
    let moveW = 0;

    if (this.fixedNode.current) {
      const { left, width } = this.fixedNode.current.getBoundingClientRect();
      fixedLeft = left;
      fixedW = width;
    }

    if (this.moveNode.current) {
      const { left, width } = this.moveNode.current.getBoundingClientRect();
      moveLeft = left;
      moveW = width;
    }

    return {
      fixedLeft,
      moveLeft,
      fixedW,
      moveW
    };
  }
}

const mapStateToProps = (store: MyStore) => {
  const { breadcrumb, selectedKeys, collapsed } = store;

  return {
    breadcrumb,
    selectedKeys,
    collapsed
  };
};

export default connect(mapStateToProps)(Tabs);

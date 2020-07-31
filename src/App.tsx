import React, { useEffect } from 'react';
import { Button } from 'antd';
import { Provider, connect } from 'react-redux';
import store from './redux';
import { setauthinfo, clearauthinfo } from './redux/authInfo/authInfo.redux';
import {
  changebreadcrumb,
  resetbreadcrumb,
  clearbreadcrumb
} from './redux/breadcrumb/breadcrumb.redux';

import {
  changecollapsed,
  clearcollapsed
} from './redux/collapsed/collapsed.redux';

import { setopenkeys, clearopenkeys } from './redux/openKeys/openKeys.redux';
import {
  setselectkeys,
  clearselectkeys
} from './redux/selectKeys/selectKeys.redux';

const Test = connect((state) => state, {
  setauthinfo,
  clearauthinfo,
  changebreadcrumb,
  resetbreadcrumb,
  clearbreadcrumb,
  changecollapsed,
  clearcollapsed,
  setopenkeys,
  clearopenkeys,
  setselectkeys,
  clearselectkeys
})((props: any) => {
  useEffect(() => {
    console.log(props);
    // props.setauthinfo([{ username: 'zhang yi' }]);
    // props.clearauthinfo();
    // #####
    // props.resetbreadcrumb([{ path: '/a', name: 'a' }]);
    // props.changebreadcrumb([{ path: '/b', name: 'b' }]);
    // props.resetbreadcrumb([{ path: '/c', name: 'c' }]);
    // props.clearbreadcrumb();
    // ###
    // props.changecollapsed(true);
    // props.clearcollapsed();
    // ###
    // props.setopenkeys(['1111']);
    // props.clearopenkeys();
    // ###

    props.setselectkeys(['1111', '22']);
    props.clearselectkeys();
  }, []);
  return <div>ok</div>;
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <Button type="primary">App</Button>
          <Test />
        </div>
      </div>
    </Provider>
  );
}

export default App;

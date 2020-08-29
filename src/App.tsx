import React from 'react';
import Root from './root';
import Header from '@_c/header';
import Logo from '@_c/root/Logo';

function App() {
  return (
    <Root
      historyType="hash"
      // navType="breadcrumb"
      navType="tab"
      maxTabNum={10}
      logo={(collapsed: boolean) => <Logo collapsed={collapsed} />}
      headerComponent={<Header />}
      headerHeight={56}
    />
  );
}

export default App;

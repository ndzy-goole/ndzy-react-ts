import React from 'react';
import Root from './root';
import Header from '@/component/root/header';
import Logo from '@/component/root/logo';

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

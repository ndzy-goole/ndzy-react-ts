import React from 'react';

import Root from './root/Root';

import Header from './component/header/Header';

function App() {
  const renderLogo = (collapsed: boolean) => {
    if (collapsed) {
      return (
        <img
          alt="logo"
          // src={require('./images/logo.png')}
          style={{ width: 32, height: 32 }}
        />
      );
    }

    return (
      <img
        alt="logo"
        // src={require('./images/logo-text.png')}
        style={{ width: 164, height: 32 }}
      />
    );
  };
  return (
    <Root
      historyType="hash"
      // navType="breadcrumb"
      navType="tab"
      maxTabNum={10}
      logo={(collapsed: boolean) => renderLogo(collapsed)}
      headerComponent={<Header />}
      headerHeight={56}
      dispatch={(): any => {}}
    />
  );
}

export default App;

import React from 'react';
import Root from './root/Root';
import Header from './component/header';

function App() {
  const img = (
    <img
      alt="logo"
      src={require('./images/ndzy.png')}
      style={{ width: 32, height: 32 }}
    />
  );
  const renderLogo = (collapsed: boolean) => {
    if (collapsed) {
      return img;
    }
    return (
      <div className="flex justify-center">
        {img} <span className="mx-auto px-4">ndzy</span>
      </div>
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
    />
  );
}

export default App;

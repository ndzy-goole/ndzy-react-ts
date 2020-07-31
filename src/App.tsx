import React from 'react';
import { Button } from 'antd';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <Button type="primary">App</Button>
        </div>
      </div>
    </Provider>
  );
}

export default App;

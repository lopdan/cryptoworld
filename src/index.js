
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React>,
  document.getElementById('root'),
);
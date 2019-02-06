import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import Provider from './components/provider';


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);

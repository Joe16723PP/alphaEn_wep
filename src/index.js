import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './components/App';
import store from './stores';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Provider { ...store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

unregister();

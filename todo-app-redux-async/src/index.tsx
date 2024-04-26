import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './utils/store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (root)
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

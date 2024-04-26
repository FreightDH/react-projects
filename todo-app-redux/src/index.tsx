import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = setupStore();

if (root)
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

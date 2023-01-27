/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProSidebarProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ProSidebarProvider>,
);

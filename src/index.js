import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Builder from './containers/Builder';
import Preview from './containers/Preview';
import './assets/stylesheets/_global.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Builder />
  </Provider>,
  document.getElementById('builder'),
);

ReactDOM.render(
  <Provider store={store}>
    <Preview />
  </Provider>,
  document.getElementById('preview'),
);

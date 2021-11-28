import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import RouterSetting from './RouterSetting';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RouterSetting/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

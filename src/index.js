import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import commonReducer from './Reducers/CommonReducer';

import './index.scss';

const store = createStore(commonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import commonReducer from './Reducers/CommonReducer';

import './index.scss';

const store = createStore(commonReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Récupération du store
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // contextualiser le store
import reducer from './reducers/combineReducer/combineReducer'; // on récupère dragon & log

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


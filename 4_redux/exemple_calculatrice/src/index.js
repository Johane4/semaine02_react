import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore , combineReducers } from 'redux';
import reducer from './reducers/reducer';
import reducer2 from './reducers/reducers2';

// Dans le cas où on aurait plusieurs reducers auxquels accéder
const bigReducer = combineReducers({
  reducer,
  reducer2
});

const store = createStore(bigReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


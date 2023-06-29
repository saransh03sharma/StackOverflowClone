import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk' 
import Reducers from './reducers'


const store = createStore(Reducers, compose(applyMiddleware(thunk)))
//this store is accessible everywhere in react
//reducer combined with compose of applymiddleware of thunk
//thunk for handling async operations wrt react

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


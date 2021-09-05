import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
import firebase from "./fbase";
import App from './App';
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();


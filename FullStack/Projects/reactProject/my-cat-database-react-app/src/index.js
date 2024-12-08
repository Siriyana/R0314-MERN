import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//getting "root" from index.html, where app-elements will be displayed
const root = ReactDOM.createRoot(document.getElementById('root'));
//starting react and calling App-component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

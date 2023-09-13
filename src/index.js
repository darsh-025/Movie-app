import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // css import 
import App from './App';  // app.jsx import ( saare path hai isme)
import {store} from "./store"; // store import (isme index.js hai jisme hamne saare array use kre hai for storage, for database, and for to access the links)
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


// utils mai firebase aur tmdb setup kiya hua hai
// assets mai saare pics aur video rkhe hue hai
// store mai database aur storage array function hai
// pages mai saare jo jo page ham khol rhe hai vo hai
// components mai - isme vo saare components hai jo hamne pages mai use kre hai
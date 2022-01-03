import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pusher from 'pusher-js';
Pusher.logToConsole = true;

var pusher = new Pusher("2d56f7896a4df75110d7", {cluster: "ap1",});
var channel = pusher.subscribe("post-nofication");
channel.bind("post", function(data:any) {
    console.log(data);
});
// import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
//import axios from 'axios';
//import './firebase';



const App = () => {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

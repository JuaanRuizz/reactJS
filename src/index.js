import React from 'react';
import ReactDOM from 'react-dom/client';

//Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'; 
// import 'bootstarp-icons/font/bootstrap-icons.css'; // Por alguna razón esto no sirve 
import "bootstrap-icons/font/bootstrap-icons.css";
// Importante: Los estilos propios deben ir DEBAJO de los bootsrtrap
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppRountingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRountingFinal';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    {/* <AppRountingOne></AppRountingOne> */}
    {/* <AppRoutingFinal></AppRoutingFinal> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




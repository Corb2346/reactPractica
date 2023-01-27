import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto } from './components/NombreCompleto';
import { NuevoComponente } from './components/NuevoComponente';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Sergio" age="30"/>
    <App name="Pax" age="25"/>
    <App />
    <NombreCompleto name="Miriam" age="25"/>
    <NuevoComponente/>
    <App />
  </React.StrictMode>
);


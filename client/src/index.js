import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    
    <BrowserRouter>
    {/* the  BrowserRouter have to wrap the aplication before to use route in react*/}
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

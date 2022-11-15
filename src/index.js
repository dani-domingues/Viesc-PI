import React from "react";
import  ReactDOM  from "react-dom";

import App from './pages/App';

import { BaseRouter, BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
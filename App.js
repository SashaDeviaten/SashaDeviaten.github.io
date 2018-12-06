"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Main from './core/Main';
import {createStore} from "redux";
import combinedReducer from "./core/reducers";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

const store = createStore(combinedReducer, {}, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>

  , document.getElementById('container') 
);

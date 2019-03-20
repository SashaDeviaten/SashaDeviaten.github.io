"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Main from './core/Main';
import {createStore} from "redux";
import combinedReducer from "./core/reducers";
import {BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

const store = createStore(combinedReducer, {}, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
            <Main/>
        </BrowserRouter>
    </Provider>

  , document.getElementById('container') 
);

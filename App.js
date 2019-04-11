"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Main from './core/Main';
import {createStore} from "redux";
import combinedReducer from "./core/reducers";
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Page_Clients from "./Pages/Page_Clients/Page_Clients.js";
import MainPage from "./Pages/MainPage/MainPage.js";
import Page_Reviews from "./Pages/Page_Reviews/Page_Reviews.jsx";
import Page_Discount from "./Pages/Page_Discount/Page_Discount.jsx";
import Page_Admin from "./Pages/Page_Admin/Page_Admin.jsx";
import Page_Master from "./Pages/Page_Master/Page_Master.js";


const store = createStore(combinedReducer, {}, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/master" component={Page_Master}/>
                <Route path="/clients" component={Page_Clients}/>
                <Route path="/reviews" component={Page_Reviews}/>
                <Route path="/discount" component={Page_Discount}/>
                <Route path="/admin" component={Page_Admin}/>
            </Switch>
            {/*<Main/>*/}
        </BrowserRouter>
    </Provider>

  , document.getElementById('container') 
);

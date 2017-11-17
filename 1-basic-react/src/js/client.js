import React from "react";
import ReactDOM from "react-dom";
//import {Router, Route, browserHistory } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
//import ReactRouter from  'react-router';

import Footer from "./components/Footer";
import Header from "./components/Header";


import Layout from "./components/Layout";
import Table from "./components/Table";

//import Index from "./components/Index";



const app = document.getElementById('app');
ReactDOM.render(
        <div>
        <Header />
        <HashRouter>
        <Switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/table" component={Table}/>
        </Switch>
        </HashRouter>
        <Footer / >
        </div>
        , app
    
);

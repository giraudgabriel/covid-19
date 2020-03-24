import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Countries from './pages/Countries';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Router>
    <Menu/>
    <Switch>
        <Route exact path="/" component ={App}/>
        <Route exact path="/countries" component ={Countries}/>
        <Redirect to="/"/>
    </Switch>
    <Footer/>
</Router>, document.getElementById('root'));

serviceWorker.unregister();

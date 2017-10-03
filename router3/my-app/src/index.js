import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
console.log(browserHistory);
ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = '/'>
            <IndexRoute component={App}/>
            <Route name = 'app' path = '/page-:id' component={App}/>
        </Route>
    </Router>
), document.getElementById('root'))

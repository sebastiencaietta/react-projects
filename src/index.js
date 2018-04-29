import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import {Router} from 'react-router-dom'
import store, {history} from './store'
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
    ,
    target
);
registerServiceWorker();

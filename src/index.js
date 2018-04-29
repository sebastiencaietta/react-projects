import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom'
import {history} from './store'
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,
    target
);
registerServiceWorker();

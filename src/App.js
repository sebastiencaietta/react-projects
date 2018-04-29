import React from 'react';
import {Route} from 'react-router-dom'
import Menu from './menu'

const App = () => (
    <div>
        <main className={'container-fluid App'}>
            <Route path="/" exact={true} component={Menu}/>
        </main>
    </div>
);

export default App;
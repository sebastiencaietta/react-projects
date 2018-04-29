import React from 'react';
import {Route} from 'react-router-dom'
import Menu from './menu'
import Notepad from './notepad'

const App = () => (
    <div>
        <main className={'container-fluid App'}>
            <Route path="/" exact={true} component={Menu}/>
        </main>
        <Route path="/notes/" component={Notepad}/>
    </div>
);

export default App;
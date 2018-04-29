import React from 'react'
import {Route} from 'react-router-dom'
import ListToolbar from './list-nav-bar'
import EditorToolbar from './editor-nav-bar'

import './index.css'

export default props => <nav className="row NavBar">
    <div className="col-sm-4 p-0">
        <ListToolbar/>
    </div>
    <div className="col-sm-8 p-0">
        <Route path="/notes/:id" component={EditorToolbar} {...props}/>
    </div>
</nav>
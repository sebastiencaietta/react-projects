import React from 'react'
import NoteEditor from "./editor/index"
import NoteList from './note-list/index'
import {Route} from 'react-router-dom'
import './index.css'

export default props => (
    <div className="Notepad container-fluid">
        <div className="row">
            <aside className="col-sm-4 p-0">
                <Route path="/notes/:id?" component={NoteList}/>
            </aside>
            <article className="col-sm-8 p-0">
                <Route path="/notes/:id" component={NoteEditor}/>
            </article>
        </div>
    </div>
)
import React from 'react'
import {connect} from 'react-redux'
import {Input} from 'reactstrap'

import './index.css'

export default connect(
    (state, ownProps) => ({
        note: state.notes.find(note => note.id === parseInt(ownProps.match.params.id, 10)),
    }),
)(props =>
    <div className="NoteEditor row">
        <div className="col-sm-12">
            <Input type="text"
                   className="title"
                   name="title"
                   bsSize="lg"
                   placeholder="Note title..."
                   value={props.note.title}
            />
        </div>
        <div className="col-sm-12">
            <Input type="textarea" name="content" id="" cols="100" rows="30" bsSize="lg"
                   value={props.note.content}/>
        </div>
    </div>
)
import React from 'react'
import {connect} from 'react-redux'
import {ListGroup} from 'reactstrap'
import NoteListItem from './note-list-item'

import './index.css'

export default connect(
    (state, ownProps) => ({
        notes: state.notes,
        activeNoteId: parseInt(ownProps.match.params.id, 10),
    })
)(props => (
    <ListGroup className="NoteList">
        {props.notes.map(note => (
            <NoteListItem key={`nav-note-${note.id}`}
                          active={note.id === props.activeNoteId}
                          note={note}
            />
        ))}
    </ListGroup>
));
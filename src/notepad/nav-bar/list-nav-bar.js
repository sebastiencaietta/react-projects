import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Nav, NavLink} from 'reactstrap'
import {addNote, isLastNoteEmpty} from '../actions'

export default connect(
    state => ({
        addNoteButtonDisabled: isLastNoteEmpty(state.notes),
    }),
    dispatch => ({
        addNote: () => dispatch(addNote()),
    }),
)(props => <Nav>
    <NavLink tag={Link} to="/">
        Home
    </NavLink>
    <NavLink onClick={props.addNote}
             disabled={props.addNoteButtonDisabled}
             tag={Link}
             to={`/notes/${localStorage.getItem('notes_auto_increment')}`}>
        Create
    </NavLink>
</Nav>)
import React from 'react'
import {connect} from 'react-redux'
import {Nav, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
import {deleteNote} from "../actions";

export default connect(
    (state, ownProps) => ({
        id: parseInt(ownProps.match.params.id, 10)
    }),
    dispatch => ({
        deleteNote: id => dispatch(deleteNote(id)),
    })
)(props => <Nav>
        <NavLink
                 onClick={() => window.confirm('Are you sure you want to delete this note ?')
                     ? props.deleteNote(props.id)
                     : null}
                 to="/notes"
                 tag={Link}>
            Delete
        </NavLink>
    </Nav>
)
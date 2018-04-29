import React from 'react';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'
import {Link} from 'react-router-dom'
import './note-list-item.css'

const NoteListItem = props => (
    <ListGroupItem
        tag={Link}
        to={`/notes/${props.note.id}`}
        action
        active={props.active}
        className={'NoteListItem'}>

        <ListGroupItemHeading style={{
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            fontSize: '20px',
            fontWeight: 'bold',
            textOverflow: 'ellipsis'
        }}>
            {props.note.title.substr(0, 50)}
        </ListGroupItemHeading>

        <ListGroupItemText style={{
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '12px',
        }}>
            {props.note.content.substr(0, 70)}
        </ListGroupItemText>

    </ListGroupItem>
);

export default NoteListItem;
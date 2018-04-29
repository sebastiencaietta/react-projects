export function setTitle(id, title) {
    return {
        type: 'SET_TITLE',
        id,
        title
    }
}

export function setContent(id, content) {
    return {
        type: 'SET_CONTENT',
        id,
        content
    }
}

export function addNote() {
    return {
        type: 'ADD_NOTE',
    }
}

export function deleteNote(id) {
    return {
        type: 'DELETE_NOTE',
        id
    }
}

export function isLastNoteEmpty(notes) {
    const lastNote = notes[0];
    return lastNote && lastNote.title === '' && lastNote.content === '';
}
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
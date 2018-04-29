const initialState = [
    {
        id: 1,
        title: 'Read the docs',
        content: 'Document myself with React-Router and ReactStrap'
    },
    {
        id: 2,
        title: 'First step',
        content: 'Create notes list and editor to edit them'
    },
    {
        id: 3,
        title: 'Second step',
        content: 'Navigate through the notes by clicking them and displaying their content in the editor'
    },
    {
        id: 4,
        title: 'Third step',
        content: 'Update current note title and content when editing them'
    },
    {
        id: 5,
        title: 'Fourth step',
        content: 'Create and delete notes'
    },
    {
        id: 6,
        title: 'Fifth step',
        content: 'Use localStorage to get and save the notes'
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return state.map(note => {
                if (note.id !== action.id) {
                    return note;
                }
                return {
                    ...note,
                    title: action.title,
                }
            });
        case 'SET_CONTENT':
            return state.map(note => {
                if (note.id !== action.id) {
                    return note;
                }

                return {
                    ...note,
                    content: action.content,
                }
            });
        default:
            return state;
    }
};
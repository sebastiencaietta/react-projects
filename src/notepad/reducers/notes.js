import {isLastNoteEmpty} from "../actions";

const initialState = JSON.parse(localStorage.getItem('notes')) || [],
    newNote = () => {
        let autoIncrement = parseInt(localStorage.getItem('notes_auto_increment'), 10) || 1;
        localStorage.setItem('notes_auto_increment', autoIncrement + 1);

        return {
            id: autoIncrement,
            title: '',
            content: '',
        }
    }, save = notes => {
        localStorage.setItem('notes', JSON.stringify(notes));
        return notes;
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return save(state.map(note => {
                if (note.id !== action.id) {
                    return note;
                }
                return {
                    ...note,
                    title: action.title,
                }
            }));
        case 'SET_CONTENT':
            return save(state.map(note => {
                if (note.id !== action.id) {
                    return note;
                }

                return {
                    ...note,
                    content: action.content,
                }
            }));
        case 'ADD_NOTE':
            return isLastNoteEmpty(state) ? state : save([
                newNote(),
                ...state,
            ]);
        case 'DELETE_NOTE':
            return save(state.filter(note => note.id !== action.id));
        default:
            return state;
    }
};
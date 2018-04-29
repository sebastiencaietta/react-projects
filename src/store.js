import {createStore, compose} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {combineReducers} from 'redux'
import notesReducer from './notepad/reducers/notes'

export const history = createHistory();

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(...enhancers);

const reducers = combineReducers({
    notes: notesReducer,
});

const store = createStore(
    reducers,
    initialState,
    composedEnhancers
);

export default store;
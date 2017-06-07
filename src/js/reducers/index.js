import { combineReducers } from 'redux';
import chat from './chat-reducer.js';

const rootReducer = combineReducers({
    chat
})

export default rootReducer;
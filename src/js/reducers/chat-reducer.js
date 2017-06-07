export default function chatReducer(state = { messages: [] }, action) {
    switch(action.type) {
        case "CREATE_MESSAGE": 
            let newState = Object.assign({}, state);
            newState.messages = state.messages.concat(action.data);
            return newState;
        default: 
            return state;
    }
}
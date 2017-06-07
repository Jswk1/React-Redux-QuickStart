import React from 'react';

import ChatMessageContainer from './chat-message-container.js';
import ChatInput from './chat-input.js';
import { connect } from 'react-redux';
import * as chatActions from '../actions/chat-actions.js';

class ChatContainer extends React.Component {
    constructor() {
        super();
        this.chatInputHandler = this.chatInputHandler.bind(this);
    }

    chatInputHandler(e) {
        let input = e.target;

        if(e.keyCode === 13 && input.value.length > 0) {
            let newMessage = input.value;
            input.value = "";
            this.props.dispatch(chatActions.createMessage(newMessage));
        }
    }

    render() {
        return(
            <div>
                <ChatMessageContainer />
                <ChatInput inputHandler={this.chatInputHandler}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps)(ChatContainer);
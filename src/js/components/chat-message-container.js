import React from 'react';
import { connect } from 'react-redux';

import ChatMessage from './chat-message.js';

class ChatMessagesContainer extends React.Component {
    
    render() {
        if(!this.props.messages) {
            return null;
        }
        else
        return(
            <div>
                {this.props.messages.map((message, iter) => <ChatMessage key={iter} date={message.date} message={message.message}/>)}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps)(ChatMessagesContainer);
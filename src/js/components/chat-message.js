import React from 'react';

export default class ChatMessage extends React.Component {
    render() {
        return (
            <div className="message">
                <span style={{fontWeight: "bold"}}>{this.props.date}</span>: <span>{this.props.message}</span>
            </div>
        )
    }
}
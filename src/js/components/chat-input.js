import React from 'react';

export default class ChatInput extends React.Component {

    render() {
        return (
            <div>
                <input onKeyUp={this.props.inputHandler} type="text"/>
            </div>
        )
    }
}
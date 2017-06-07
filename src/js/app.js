import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../sass/style.scss';
import configureStore from './store/configure-store.js';
import { Provider } from 'react-redux';

import ChatContainer from './components/chat-container.js';

const store = configureStore();

export class App extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div>
                <h1>Chat</h1>
                <ChatContainer />
            </div>
        )
    }
}

let app = document.getElementById("app");
ReactDOM.render(<Provider store={store}><App /></Provider>, app);
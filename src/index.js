import React from 'react';
import state, {subscribe} from './redux/state'
import ReactDOM from 'react-dom/client';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = () => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
        </React.StrictMode>
    );
}

rerenderTree();
subscribe(rerenderTree);
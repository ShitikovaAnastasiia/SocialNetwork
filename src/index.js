import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/state";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
 const rerenderTree = (state) => {

    root.render(
        <React.StrictMode>

            <App state={store.state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)} addMessage={store.addMessage.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderTree(store.getState());
store.subscribe(rerenderTree);

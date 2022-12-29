import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/state";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
 const rerenderTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderTree(store.getState());
store.subscribe(rerenderTree);

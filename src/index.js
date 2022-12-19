import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  state from './redux/state'
import './index.css';

const userData = [
    {user: 'Ana', id: 1},
    {user: 'John', id: 2},
    {user: 'Mark', id: 3}
]
const messageData = [
    {message: 'Hi', id: 1},
    {message: 'How are you?', id: 2}
]
const postData = [
    {message: 'My first post', like: 1, id: 1},
    {message: 'How are you?', like: 3, id: 2}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);




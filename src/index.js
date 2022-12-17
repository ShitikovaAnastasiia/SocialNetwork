import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const userData = [
    {user: 'Ana', id: 1},
    {user: 'John', id: 2},
    {user: 'Mark', id: 3}
]
const messageData = [
    {message: 'Hi', id: 1},
    {message: 'How are you?', id: 2}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App userData={userData} messageData={messageData}/>
  </React.StrictMode>
);




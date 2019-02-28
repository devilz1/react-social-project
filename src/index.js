import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {
    messagesData: [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'How are you'},
        {id: 3, messages: ':-)'},
        {id: 4, messages: 'Привет чудик)'},
        {id: 5, messages: 'Как настрой?)'},
        {id: 6, messages: ')))'},
        {id: 7, messages: 'Ты пойдёшь?'},
        {id: 8, messages: 'Будет весело'},
        {id: 9, messages: 'Окай('},
        {id: 10, messages: 'Потом увидимся)))'}
    ],
    dialogsData: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Jonathan'},
        {id: 3, name: 'Patrick'},
    ]
};

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

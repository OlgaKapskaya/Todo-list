import React from 'react';
import './App.css';
import {TodolistComponent} from "./component/TodolistComponent";

function App() {

    const title1 = "What to learn1";
    const title2 = "What to learn2"
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true, newValue: true},
        {id: 2, title: "JS", isDone: true, newValue: true},
        {id: 3, title: "ReactJS", isDone: false, newValue: true}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]


    return (
        <div>
            <TodolistComponent title={title1} tasks={tasks1}/>
            <TodolistComponent title={title2} tasks={tasks2}/>
        </div>
    );
}

export default App;

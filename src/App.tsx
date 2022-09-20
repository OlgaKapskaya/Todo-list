import React, {useState} from 'react';
import './App.css';
import {TodolistComponent} from "./component/TodolistComponent";

export type ButtonNameType = "all" | "completed" | "active"

function App() {

    const title1 = "What to learn";
    /*let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true, newValue: true},
        {id: 2, title: "JS", isDone: true, newValue: true},
        {id: 3, title: "ReactJS", isDone: false, newValue: true}
    ];*/
    const [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true, newValue: true},
        {id: 2, title: "JS", isDone: true, newValue: true},
        {id: 3, title: "ReactJS", isDone: false, newValue: true}
    ]);

    const removeTask = (taskID: number) => {
        setTasks(tasks1.filter((elem)=>elem.id !== taskID));
    }



    let filteredTask = tasks1;

    const [filteredButton, filter] = useState<ButtonNameType>("all");
    if (filteredButton === "all") {
        filteredTask = tasks1
    };
    if (filteredButton === "active") {
        filteredTask = tasks1.filter(el=>el.isDone)
    }
    if (filteredButton === "completed") {
        filteredTask = tasks1.filter(el=>!el.isDone)
    }


    const filterTask = (buttonName: ButtonNameType) => {
        filter(buttonName);
    }

    return (
        <div>
            <TodolistComponent title={title1} tasks={filteredTask} removeTask={removeTask} filterTasks={filterTask}/>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import "./App.css"
import {TodolistComponent, TasksType} from "./component/TodolistComponent";

export type ButtonNameType = "all" | "completed" | "active"

function App() {

    const title1 = "What to learn";
    /*let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true, newValue: true},
        {id: 2, title: "JS", isDone: true, newValue: true},
        {id: 3, title: "ReactJS", isDone: false, newValue: true}
    ];*/


    const [tasks1, setTasks] = useState<TasksType[]>([
        {id: 1, title: "HTML&CSS", isDone: true, newValue: true},
        {id: 2, title: "JS", isDone: true, newValue: true},
        {id: 3, title: "ReactJS", isDone: false, newValue: true}
    ]);



    const removeTask = (taskID: number) => {
        console.log(taskID)
        setTasks(tasks1.filter((elem) => elem.id !== taskID));
        setFilteredTask(tasks1.filter((elem) => elem.id !== taskID));
        //спросить, как избавиться от дублирования!!! строка 27-28
        console.log(tasks1)
    }


    /*    let filteredTask = tasks1;

        const [filteredButton, filter] = useState<ButtonNameType>("all");
        if (filteredButton === "all") {
            filteredTask = tasks1
        };
        if (filteredButton === "active") {
            filteredTask = tasks1.filter(el=>el.isDone)
        }
        if (filteredButton === "completed") {
            filteredTask = tasks1.filter(el=>!el.isDone)
        }*/



    const [filteredTask, setFilteredTask] = useState<TasksType[]>(tasks1)
    const changeFilter = (buttonName: ButtonNameType) => {

        if (buttonName === "all") {
            setFilteredTask(tasks1)
        }
        if (buttonName === "completed") {
            setFilteredTask(tasks1.filter(elem => !elem.isDone))
        }
        if (buttonName === "active") {
            setFilteredTask(tasks1.filter(elem => elem.isDone))
        }

    }


    /*const filterTask = (buttonName: ButtonNameType) => {
        filter(buttonName);
    }*/

    return (
        <div>
            <TodolistComponent title={title1} tasks={filteredTask} removeTask={removeTask} filterTasks={changeFilter}/>
        </div>
    );
}

export default App;

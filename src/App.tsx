import React, {useState} from 'react';
import "./App.css"
import {TodolistComponent, TasksType} from "./component/TodolistComponent";
import {v1} from "uuid";

export type ButtonNameType = "all" | "completed" | "active"

function App() {

    const title1 = "What to learn";
    /*let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true, newValue: true},
        {id: 2, title: "JS", isDone: true, newValue: true},
        {id: 3, title: "ReactJS", isDone: false, newValue: true}
    ];*/


    const [tasks1, setTasks] = useState<TasksType[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphUL", isDone: true}
    ]);


    const removeTask = (taskID: string) => {
        let filter = tasks1.filter((elem) => elem.id !== taskID);
        setTasks(filter);
        setFilteredTask(filter);
        //спросить, как избавиться от дублирования!!! строка 27-28
    }

    const addTask = (text: string) => {
        let newTask = {id: v1(), title: text, isDone: false};
        setTasks([newTask, ...tasks1]);
        setFilteredTask([newTask, ...tasks1]);
    }


   // let filteredTask = tasks1;

    /*const [filteredButton, filter] = useState<ButtonNameType>("all");
    if (filteredButton === "all") {
        filteredTask = tasks1
    }
    ;
    if (filteredButton === "active") {
        filteredTask = tasks1.filter(el => el.isDone)
    }
    if (filteredButton === "completed") {
        filteredTask = tasks1.filter(el => !el.isDone)
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
            <TodolistComponent
                title={title1}
                tasks={filteredTask}
                removeTask={removeTask}
                filterTasks={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;

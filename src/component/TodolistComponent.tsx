import React from 'react';
import {ButtonNameType} from "../App";

type TodolistComponentProps = {
    title?: string;
    tasks: Array<TasksType>
    removeTask: (taskID: number) => void
    filterTasks:(buttonName: ButtonNameType) => void

}

type TasksType = {
    id: number;
    title: string;
    isDone: boolean;
    newValue?: boolean;
}

export const TodolistComponent = (props: TodolistComponentProps) => {

    return (
        <>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {props.tasks.map((elem, index) => {
                    return (

                        <li key={elem.id}>
                            <button onClick={()=>{props.removeTask(elem.id)}}>DEL</button>
                            <input type={"checkbox"} checked={elem.isDone}/>
                            <span>{elem.title} </span>

                        </li>


                    )
                })}
            </ul>
            <div>
                <button onClick={()=>props.filterTasks("all")}>All</button>
                <button onClick={()=>props.filterTasks("active")}>Active</button>
                <button onClick={()=>props.filterTasks("completed")}>Completed</button>
            </div>
        </>
    )
}
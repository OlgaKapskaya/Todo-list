import React from 'react';

type TodolistComponentProps = {
    title?: string;
    tasks: Array<TasksType>

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
                        <li key={index}><input type={"checkbox"} checked={elem.isDone}/><span>{elem.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </>
    )
}
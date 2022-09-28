import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ButtonNameType} from "../App";
import {Button} from "./Button";

type TodolistComponentProps = {
    title?: string;
    tasks: Array<TasksType>
    removeTask: (taskID: string) => void
    filterTasks: (buttonName: ButtonNameType) => void
    addTask: (text: string) => void
}

export type TasksType = {
    id: string;
    title: string;
    isDone: boolean;
    newValue?: boolean;
}

export const TodolistComponent = (props: TodolistComponentProps) => {

    const [text, setText] = useState("");

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
    }

    const addTaskHandler = () => {
        props.addTask(text)
        setText("");
    }

    const onKeyPressInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            addTaskHandler();
        }
    }

    const changeFilter = (buttonName: ButtonNameType) => {
        props.filterTasks(buttonName)
    }

    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }

   const mapTasks = props.tasks.map((elem, index) => {
            return (
                <li key={elem.id}>
                    <Button name={'DEL'} callback={()=>removeTaskHandler(elem.id)}/>
                    <input type={"checkbox"} checked={elem.isDone}/>
                    <span>{elem.title} </span>
                </li>
            )
        })

    return (
        <>
            <h3>{props.title}</h3>
            <div>
                <input value={text} onChange={onChangeInputHandler} onKeyPress={onKeyPressInputHandler}/>
                <Button name={'+'} callback={addTaskHandler}/>
            </div>

            <ul>
                {mapTasks}
            </ul>
            <div>
                <Button name={'All'} callback={() => changeFilter('all')}/>
                <Button name={'Active'} callback={() => changeFilter('active')}/>
                <Button name={'Completed'} callback={() => changeFilter('completed')}/>
            </div>
        </>
    )
}
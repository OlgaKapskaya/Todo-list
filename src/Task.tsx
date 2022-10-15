import React from "react";
import {TaskType} from "./Todolist";


type TaskPropsType = {
    task: TaskType
    changeStatus: (taskId: string, isDone: boolean) => void
    removeTask: (taskId: string) => void
}
export const Task = (props: TaskPropsType) => {

    return (
        <li key={props.task.taskId} className={props.task.isDone ? "is-done" : ""}>
            <input type="checkbox"
                   onChange={(event) => props.changeStatus(props.task.taskId, event.currentTarget.checked)}
                   checked={props.task.isDone}/>
            <button onClick={() => props.removeTask(props.task.taskId)}>x</button>
            <span> {props.task.title}</span>

        </li>
    )
}
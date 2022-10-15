import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Todolist.module.css'
import {FilterValuesType} from './App';
import {Task} from "./Task";

export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}

type PropsType = {
    key: string
    todolistID: string
    title: string
    tasks: Array<TaskType>
    students: Array<string>
    removeTask: (taskId: string, todolistID: string) => void
    changeFilter: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistID: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistID: string) => void
    deleteStudent: (todolistID: string, name: string) => void
    addStudent: (todolistID: string, name: string) => void
    collapseTodolist: (todolistID: string) => void
    isOpen: boolean
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const [studentName, setStudentName] = useState('')

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.todolistID);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const addStudent = () => {
        if (studentName.trim() !== "") {
            props.addStudent(props.todolistID, studentName);
            setStudentName("");
        } else {
            alert("Name is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onChangeStudentHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStudentName(event.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }
    const onKeyPressStudentHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addStudent();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all", props.todolistID);
    const onActiveClickHandler = () => props.changeFilter("active", props.todolistID);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.todolistID);
    const removeTodolistHandler = () => props.removeTodolist(props.todolistID)


    const onClickOpenHandler = () => {
        props.collapseTodolist(props.todolistID)
    }

    return <div className={s.mainContainer}>
        <h3>
            <button onClick={removeTodolistHandler}>DEL</button>
            {` ${props.title}`}
        </h3>
        <button onClick={onClickOpenHandler}> open</button>

        {props.isOpen &&
            <>
                <div className={s.listContainer}>


                    <div>
                        <div className={s.label}>Enter task title:</div>
                        <input value={title}
                               onChange={onChangeHandler}
                               onKeyPress={onKeyPressHandler}
                               className={error ? "error" : ""}
                        />
                        <button onClick={addTask}>+</button>
                        {error && <div className="error-message">{error}</div>}
                    </div>
                    <ul>
                        {
                            props.tasks.map(t => {
                                const removeTask = (taskID: string) => {
                                    props.removeTask(taskID, props.todolistID)
                                }
                                const changeTaskStatus = (taskId: string, isDone: boolean) => {
                                    props.changeTaskStatus(taskId, isDone, props.todolistID)
                                }
                                return (
                                        <Task
                                            task={t}
                                            changeStatus={changeTaskStatus}
                                            removeTask={removeTask}/>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <button className={props.filter === 'all' ? "active-filter" : ""}
                                onClick={onAllClickHandler}>All
                        </button>
                        <button className={props.filter === 'active' ? "active-filter" : ""}
                                onClick={onActiveClickHandler}>Active
                        </button>
                        <button className={props.filter === 'completed' ? "active-filter" : ""}
                                onClick={onCompletedClickHandler}>Completed
                        </button>
                    </div>
                </div>
                <hr/>
                <div className={s.studentList}>
                    <h4> STUDENTS LIST </h4>
                    <div className={s.label}>Enter student name:</div>
                    <input value={studentName}
                           onChange={onChangeStudentHandler}
                           onKeyPress={onKeyPressStudentHandler}
                    />
                    <button onClick={addStudent}>+</button>
                    <ol>
                        {props.students.map( (elem) => {
                            const onClickDeleteStudent = () => {
                                props.deleteStudent(props.todolistID, elem)
                            }
                            return (
                                <li>
                                    <button onClick={onClickDeleteStudent}>DEL</button>
                                    <span> {elem}</span>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </>
        }
    </div>

}

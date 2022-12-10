import React, {useEffect, useState} from 'react'
import {todolistsAPI, UpdateTaskType} from "../dal/todolists-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then(res => setState(res.data))

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')

    const addTodolist = () => {
        todolistsAPI.createTodolist('new title')
            .then(res => {
                setState(res.data.data.item)
            })
    }
    return <div>
        <input placeholder='todolist title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={addTodolist}>add todolist</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const deleteTodolist = () => {
        todolistsAPI.deleteTodolist(todolistID)
            .then(res => setState(res.data))
    }
    return <div>
        <input placeholder='todolistID' value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <button onClick={deleteTodolist}>delete todolist</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const updateTodolistTitle = () => {
        todolistsAPI.updateTodolistTitle(todolistID, title)
            .then(res => setState(res.data))
    }
    return <div>
        <input placeholder='todolistID' value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input placeholder='todolist title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={updateTodolistTitle}>update todolist</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const getTasks = () => {
        todolistsAPI.getTasks(todolistID)
            .then(res => setState(res.data))
    }
    return <div>
        <input placeholder='todolistID' value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <button onClick={getTasks}>get tasks</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const createTask = () => {
        todolistsAPI.createTask(todolistID, title)
            .then(res => {
                setState(res.data)
            })
    }
    return <div>
        <input placeholder='todolistID' value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input placeholder='todolist title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={createTask}>create task</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')
    useEffect(() => {
        const todolistID = '3b7d5b45-d862-409c-bb76-bf7e0aed20e6'

    }, [])
    const deleteTask = () => {
        todolistsAPI.deleteTask(todolistID, taskID)
            .then(res => {
                setState(res.data)
            })
    }
    return <div>
        <input placeholder='todolistID' value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input placeholder='taskID' value={taskID} onChange={(e) => setTaskID(e.currentTarget.value)}/>
        <button onClick={deleteTask}>delete task</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const updateTask = () => {
        const task: UpdateTaskType = {
            title: title,
            description: '',
            completed: false,
            status: 1,
            priority: 1,
            startDate: new Date(),
            deadline: new Date()
        }
        todolistsAPI.updateTask(todolistID, taskID, task)
            .then(res => {
                setState(res.data)
            })
    }
    return <div>
        <input placeholder='todolistID' value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input placeholder='taskID' value={taskID} onChange={(e) => setTaskID(e.currentTarget.value)}/>
        <input placeholder='title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={updateTask}>update task</button>
        <div>RESPONSE: {JSON.stringify(state)}</div>
    </div>
}
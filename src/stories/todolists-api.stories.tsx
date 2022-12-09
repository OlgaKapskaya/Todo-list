import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../dal/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then(res => setState(res.data))

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('new title')
            .then(res => {
                setState(res.data.data.item)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = '6bd204e5-a1a2-4203-9367-5b5750983cac'
        todolistAPI.deleteTodolist(todolistID)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = '3b7d5b45-d862-409c-bb76-bf7e0aed20e6'
        todolistAPI.updateTodolistTitle(todolistID, 'edit title')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
import axios from "axios";

type TodolistType = {
    id: string
    title: string
    addedDate: Date
    order: number
}

/**
 * D - data object type (default = {})
 */
type ResponseType<D = {}> = {
    resultCode: number
    fieldErrors: string[]
    messages: string[]
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a3689f8d-4bdb-4cdd-9a1a-83733437adfc'
    }
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
    deleteTodolist(todolistID: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistID}`)
    },
    updateTodolistTitle(todolistID: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistID}`, {title})
    }

}
import axios from 'axios';

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
export type TaskType = {
    id: string
    todoListId: string
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: Date
    deadline: Date
    addedDate: Date
}

export type UpdateTaskType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: Date
    deadline: Date
}

export type TodolistType = {
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
type GetTasksResponseType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a3689f8d-4bdb-4cdd-9a1a-83733437adfc'
    }
})

export const todolistsAPI = {
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
    },
    getTasks(todolistID: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistID}/tasks`)
    },
    createTask(todolistID: string, title: string) {
        return instance.post<ResponseType<{ item: TaskType }>>(`todo-lists/${todolistID}/tasks`, {title})
    },
    deleteTask(todolistID: string, taskID: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskID}`)
    },
    updateTask(todolistID: string, taskID: string, task: UpdateTaskType) {
        return instance.put<ResponseType<{ item: TaskType }>>(`/todo-lists/${todolistID}/tasks/${taskID}`, task)
    }

}
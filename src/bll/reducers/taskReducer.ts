import {AddTodolistAT, RemoveTodolistAT} from "./todolistReducer";
import {TaskPriorities, TaskStatuses, TaskType} from "../../dal/todolists-api";
import {v1} from "uuid";

export type TasksStateType = {
    [key: string]: TaskType[]
}
//full action type
export type TasksAT = RemoveTaskAT | AddTaskAT
    | ChangeTaskStatusAT | ChangeTaskTitleAT
    | AddTodolistAT | RemoveTodolistAT

//action type
type RemoveTaskAT = ReturnType<typeof removeTaskAC>
type AddTaskAT = ReturnType<typeof addTaskAC>
type ChangeTaskStatusAT = ReturnType<typeof changeTaskStatusAC>
type ChangeTaskTitleAT = ReturnType<typeof changeTaskTitleAC>


const initState: TasksStateType = {}
export const taskReducer = (state = initState, action: TasksAT): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            return {...state, [action.todolistID]: state[action.todolistID].filter(t => t.id !== action.taskID)}
        case 'ADD_TASK':
            const newTask: TaskType = {
                id: v1(),
                todoListId: action.todolistID,
                title: action.taskTitle,
                description: '',
                status: TaskStatuses.New,
                priority: TaskPriorities.Urgently,
                startDate: new Date(),
                deadline: new Date(),
                addedDate: new Date()
            }
            return {
                ...state,
                [action.todolistID]: [newTask, ...state[action.todolistID]]
            }
        case 'CHANGE_TASK_STATUS':
            return {
                ...state, [action.todolistID]: state[action.todolistID].map(elem => {
                    return elem.id === action.taskID ? {...elem, status: action.status} : elem
                })
            }
        case 'CHANGE_TASK_TITLE':
            return {
                ...state, [action.todolistID]: state[action.todolistID].map(elem => elem.id === action.taskID ? {...elem, title: action.newTitle} : elem)
            }
        case 'ADD_TODOLIST':
            return {...state, [action.newTodolistID]: []}
        case 'REMOVE_TODOLIST':
            let stateCopy = {...state}
            delete stateCopy[action.todolistID]
            return stateCopy
        default:
            return state
    }
}

//action creators
export const removeTaskAC = (taskID: string, todolistID: string) => {
    return {type: 'REMOVE_TASK', taskID, todolistID} as const
}
export const addTaskAC = (taskTitle: string, todolistID: string) => {
    return {type: 'ADD_TASK', taskTitle, todolistID} as const
}
export const changeTaskStatusAC = (taskID: string, status: TaskStatuses, todolistID: string) => {
    return {type: 'CHANGE_TASK_STATUS', taskID, status, todolistID} as const
}
export const changeTaskTitleAC = (taskID: string, newTitle: string, todolistID: string) => {
    return {type: 'CHANGE_TASK_TITLE', taskID, newTitle, todolistID} as const
}

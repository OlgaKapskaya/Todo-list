import {TaskType} from "../../Todolist";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolistReducer";


const REMOVE_TASK = 'REMOVE_TASK'
const ADD_TASK = 'ADD_TASK'
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS'
const CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE'
const ADD_EMPTY_TASK_LIST = 'ADD_EMPTY_TASK_LIST'

export type TasksStateType = {
    [key: string]: TaskType[]
}
//full action type
type TaskActionFullType = RemoveTaskActionType | AddTaskAT
    | ChangeTaskStatusAT | ChangeTaskTitleAT
    | AddTodolistActionType | RemoveTodolistActionType

//action type
type RemoveTaskActionType = {
    type: 'REMOVE_TASK'
    todolistID: string
    taskID: string
}
type AddTaskAT = {
    type: 'ADD_TASK'
    taskTitle: string
    todolistID: string
}
type ChangeTaskStatusAT = {
    type: 'CHANGE_TASK_STATUS'
    taskID: string
    isDone: boolean
    todolistID: string
}
type ChangeTaskTitleAT = {
    type: 'CHANGE_TASK_TITLE'
    taskID: string
    newTitle: string
    todolistID: string
}



export const taskReducer = (state: TasksStateType, action: TaskActionFullType): TasksStateType => {
    switch (action.type) {
        case REMOVE_TASK:
            return {...state, [action.todolistID]: state[action.todolistID].filter(t => t.id !== action.taskID)}
        case ADD_TASK:
            return {
                ...state,
                [action.todolistID]: [{id: v1(), title: action.taskTitle, isDone: false}, ...state[action.todolistID]]
            }
        case CHANGE_TASK_STATUS:
            return {
                ...state, [action.todolistID]: state[action.todolistID].map(elem => {
                    return elem.id === action.taskID ? {...elem, isDone: action.isDone} : elem
                })
            }
        case CHANGE_TASK_TITLE:
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
export const removeTaskAC = (taskID: string, todolistID: string): RemoveTaskActionType => {
    return {type: REMOVE_TASK, taskID, todolistID}
}
export const addTaskAC = (taskTitle: string, todolistID: string): AddTaskAT => {
    return {type: ADD_TASK, taskTitle, todolistID}
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string): ChangeTaskStatusAT => {
    return {type: CHANGE_TASK_STATUS, taskID, isDone, todolistID}
}
export const changeTaskTitleAC = (taskID: string, newTitle: string, todolistID: string): ChangeTaskTitleAT => {
    return {type: CHANGE_TASK_TITLE, taskID, newTitle, todolistID}
}

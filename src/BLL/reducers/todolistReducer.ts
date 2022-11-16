import {FilterValuesType, TodolistsType} from "../../App";
import {v1} from "uuid";

const ADD_TODOLIST = 'ADD_TODOLIST'
const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE'
const CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER'

//full action type
export type TodolistActionFullType = AddTodolistActionType | RemoveTodolistActionType |
    ChangeTodolistTitleActionType | ChangeTodolistFilterActionType
//action type
export type AddTodolistActionType = {
    type: 'ADD_TODOLIST'
    newTodolistID: string
    newTodolistTitle: string
}
export type RemoveTodolistActionType = {
    type: 'REMOVE_TODOLIST'
    todolistID: string
}
type ChangeTodolistTitleActionType = {
    type: 'CHANGE_TODOLIST_TITLE'
    todolistID: string
    newTitle: string
}
type ChangeTodolistFilterActionType = {
    type: 'CHANGE_TODOLIST_FILTER'
    todolistID: string
    newFilter: FilterValuesType
}

const initState: TodolistsType[] = []
export const todolistReducer = (state = initState, action: TodolistActionFullType):TodolistsType[] => {
    switch (action.type) {
        case ADD_TODOLIST:
            let newTodolist: TodolistsType = {id: action.newTodolistID, title: action.newTodolistTitle, filter: 'all'}
            return [newTodolist, ...state]
        case REMOVE_TODOLIST:
            return state.filter(elem => elem.id !== action.todolistID)
        case CHANGE_TODOLIST_TITLE:
            return state.map(elem => elem.id === action.todolistID ? {...elem, title: action.newTitle} : elem)
        case CHANGE_TODOLIST_FILTER:
            return state.map(elem => elem.id === action.todolistID ? {...elem, filter: action.newFilter} : elem)
        default:
            return state
    }
}

//action creators
export const AddTodolistActionCreator = (newTodolistTitle: string):AddTodolistActionType => {
    return {type: ADD_TODOLIST, newTodolistID: v1(), newTodolistTitle: newTodolistTitle}
}
export const RemoveTodolistActionCreator = (todolistID: string): RemoveTodolistActionType => {
    return {type: REMOVE_TODOLIST, todolistID: todolistID}
}
export const ChangeTodolistTitleActionCreator = (todolistID: string, newTitle: string):ChangeTodolistTitleActionType  => {
    return {type: CHANGE_TODOLIST_TITLE, todolistID: todolistID, newTitle: newTitle}
}
export const ChangeTodolistFilterActionCreator = (todolistID: string, newFilter: FilterValuesType):ChangeTodolistFilterActionType => {
    return {type: CHANGE_TODOLIST_FILTER, todolistID: todolistID, newFilter: newFilter}
}

import {FilterValuesType, TodolistsType} from "../../App";

const ADD_TODOLIST = 'ADD_TODOLIST'
const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE'
const CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER'

//full action type
type TodolistActionFullType = AddTodolistActionType | RemoveTodolistActionType |
    ChangeTodolistTitleActionType | ChangeTodolistFilterActionType
//action type
type AddTodolistActionType = {
    type: 'ADD_TODOLIST'
    newTodolistID: string
    newTodolistTitle: string
}
type RemoveTodolistActionType = {
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

export const todolistReducer = (state: TodolistsType[], action: TodolistActionFullType):TodolistsType[] => {
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
export const AddTodolistActionCreator = (newTodolistID: string, newTodolistTitle: string) => {
    return {type: ADD_TODOLIST, newTodolistID: newTodolistID, newTodolistTitle: newTodolistTitle} as AddTodolistActionType
}
export const RemoveTodolistActionCreator = (todolistID: string) => {
    return {type: REMOVE_TODOLIST, todolistID: todolistID} as RemoveTodolistActionType
}
export const ChangeTodolistTitleActionCreator = (todolistID: string, newTitle: string) => {
    return {type: CHANGE_TODOLIST_TITLE, todolistID: todolistID, newTitle: newTitle} as ChangeTodolistTitleActionType
}
export const ChangeTodolistFilterActionCreator = (todolistID: string, newFilter: FilterValuesType) => {
    return {type: CHANGE_TODOLIST_FILTER, todolistID: todolistID, newFilter: newFilter} as ChangeTodolistFilterActionType
}

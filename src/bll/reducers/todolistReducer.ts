import {v1} from "uuid";
import {TodolistType} from "../../dal/todolists-api";


export type FilterValuesType = "all" | "active" | "completed";
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

//full action type
export type TodolistAT = AddTodolistAT | RemoveTodolistAT |
    ChangeTodolistTitleAT | ChangeTodolistFilterAT
//action type
export type AddTodolistAT = ReturnType<typeof addTodolistAC>
export type RemoveTodolistAT = ReturnType<typeof removeTodolistAC>
type ChangeTodolistTitleAT = ReturnType<typeof changeTodolistTitleAC>
type ChangeTodolistFilterAT = ReturnType<typeof changeTodolistFilterAC>

const initState: TodolistDomainType[] = []
export const todolistReducer = (state = initState, action: TodolistAT):TodolistDomainType[] => {
    switch (action.type) {
        case 'ADD_TODOLIST':
            const newTodolist: TodolistDomainType =
                {
                    id: action.newTodolistID,
                    title: action.newTodolistTitle,
                    filter: 'all',
                    addedDate: new Date(),
                    order: 0
                }
            return [newTodolist, ...state]
        case 'REMOVE_TODOLIST':
            return state.filter(elem => elem.id !== action.todolistID)
        case 'CHANGE_TODOLIST_TITLE':
            return state.map(elem => elem.id === action.todolistID ? {...elem, title: action.newTitle} : elem)
        case 'CHANGE_TODOLIST_FILTER':
            return state.map(elem => elem.id === action.todolistID ? {...elem, filter: action.newFilter} : elem)
        default:
            return state
    }
}

//action creators
export const addTodolistAC = (newTodolistTitle: string) => {
    return {type: 'ADD_TODOLIST', newTodolistID: v1(), newTodolistTitle: newTodolistTitle} as const
}
export const removeTodolistAC = (todolistID: string) => {
    return {type: 'REMOVE_TODOLIST', todolistID: todolistID} as const
}
export const changeTodolistTitleAC = (todolistID: string, newTitle: string) => {
    return {type: 'CHANGE_TODOLIST_TITLE', todolistID: todolistID, newTitle: newTitle} as const
}
export const changeTodolistFilterAC = (todolistID: string, newFilter: FilterValuesType) => {
    return {type: 'CHANGE_TODOLIST_FILTER', todolistID: todolistID, newFilter: newFilter} as const
}

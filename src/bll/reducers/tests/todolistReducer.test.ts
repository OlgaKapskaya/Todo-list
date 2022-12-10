import {v1} from "uuid";

import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC, TodolistDomainType,
    todolistReducer
} from "../todolistReducer";

let todolistID1: string;
let todolistID2: string;
let state: TodolistDomainType[]

beforeEach(() => {
    todolistID1 = v1();
    todolistID2 = v1()
    state = [
        {id: todolistID1, title: 'What to learn', filter: 'all', order: 0, addedDate: new Date()},
        {id: todolistID2, title: 'What to buy', filter: 'all', order: 0, addedDate: new Date()},
    ]
})


test('todolist add function', () => {
    let newState = todolistReducer(state, addTodolistAC('newTodolist'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(3)
    expect(newState[0].title).toBe('newTodolist')
    expect(newState[1]).toBe(state[0])
    expect(newState[2]).toBe(state[1])
})
test('todolist remove function', () => {
    let newState = todolistReducer(state, removeTodolistAC(todolistID2))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(1)
    expect(newState[0].title).toBe('What to learn')
})
test('todolist change title function', () => {
    let newState = todolistReducer(state, changeTodolistTitleAC(todolistID1, 'newTitle'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(2)
    expect(newState[0].title).toBe('newTitle')
})
test('todolist change filter function', () => {

    let newState = todolistReducer(state, changeTodolistFilterAC(todolistID1, 'active'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(2)
    expect(newState[1]).toBe(state[1])
    expect(newState[0]).not.toBe(state[0])
    expect(newState[0].filter).toBe('active')
    expect(newState[1].filter).toBe('all')
})
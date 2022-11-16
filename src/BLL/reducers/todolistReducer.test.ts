import {v1} from "uuid";
import {
    AddTodolistActionCreator, ChangeTodolistFilterActionCreator,
    ChangeTodolistTitleActionCreator,
    RemoveTodolistActionCreator,
    todolistReducer
} from "./todolistReducer";
import {TodolistsType} from "../../App";

let todolistID1: string;
let todolistID2: string;
let state: TodolistsType[]

beforeEach(() => {
    todolistID1 = v1();
    todolistID2 = v1()
    state = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
})


test('todolist add function', () => {
    let newState = todolistReducer(state, AddTodolistActionCreator('newTodolist'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(3)
    expect(newState[0].title).toBe('newTodolist')
    expect(newState[1]).toBe(state[0])
    expect(newState[2]).toBe(state[1])
})
test('todolist remove function', () => {
    let newState = todolistReducer(state, RemoveTodolistActionCreator(todolistID2))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(1)
    expect(newState[0].title).toBe('What to learn')
})
test('todolist change title function', () => {
    let newState = todolistReducer(state, ChangeTodolistTitleActionCreator(todolistID1, 'newTitle'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(2)
    expect(newState[0].title).toBe('newTitle')
})
test('todolist change filter function', () => {

    let newState = todolistReducer(state, ChangeTodolistFilterActionCreator(todolistID1, 'active'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(2)
    expect(newState[1]).toBe(state[1])
    expect(newState[0]).not.toBe(state[0])
    expect(newState[0].filter).toBe('active')
    expect(newState[1].filter).toBe('all')
})
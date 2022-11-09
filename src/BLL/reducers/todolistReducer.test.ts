import {v1} from "uuid";
import {
    AddTodolistActionCreator, ChangeTodolistFilterActionCreator,
    ChangeTodolistTitleActionCreator,
    RemoveTodolistActionCreator,
    todolistReducer
} from "./todolistReducer";
import {TodolistsType} from "../../App";

test('todolist add function', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state:TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    let newID = v1()
    let newState = todolistReducer(state, AddTodolistActionCreator(newID, 'newTodolist'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(3)
    expect(newState[0].title).toBe('newTodolist')
    expect(newState[1]).toBe(state[0])
    expect(newState[2]).toBe(state[1])
})
test('todolist remove function', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state:TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    let newState = todolistReducer(state, RemoveTodolistActionCreator(todolistID2))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(1)
    expect(newState[0].title).toBe('What to learn')
})
test('todolist change title function', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state:TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    let newState = todolistReducer(state, ChangeTodolistTitleActionCreator(todolistID1, 'newTitle'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(2)
    expect(newState[0].title).toBe('newTitle')
})
test('todolist change filter function', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state:TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    let newState = todolistReducer(state, ChangeTodolistFilterActionCreator(todolistID1, 'active'))

    expect(newState).not.toBe(state)
    expect(newState.length).toBe(2)
    expect(newState[1]).toBe(state[1])
    expect(newState[0]).not.toBe(state[0])
    expect(newState[0].filter).toBe('active')
    expect(newState[1].filter).toBe('all')
})
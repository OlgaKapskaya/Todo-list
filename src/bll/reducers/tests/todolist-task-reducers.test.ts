import {taskReducer, TasksStateType} from "../taskReducer";
import {addTodolistAC, removeTodolistAC, TodolistDomainType, todolistReducer} from "../todolistReducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "../../../dal/todolists-api";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {}
    const startTodolistsState: TodolistDomainType[] = []

    const action = addTodolistAC('new todolist')

    const endTasksState = taskReducer(startTasksState, action)
    const endTodolistsState = todolistReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id

    expect(idFromTasks).toBe(action.newTodolistID)
    expect(idFromTodolists).toBe(action.newTodolistID)
})
test('property with todolistId should be deleted', () => {
    const startState: TasksStateType = {
        'todolistId1': [
            {id: v1(), todoListId:'todolistId1', title: "HTML&CSS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: v1(),todoListId:'todolistId1', title: "JS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ],
        'todolistId2': [
            {id: v1(), todoListId:'todolistId2', title: "Milk", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: v1(),todoListId:'todolistId2', title: "React Book", status: TaskStatuses.InProgress, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ]
    }

    const action = removeTodolistAC('todolistId2')
    const endState = taskReducer(startState, action)
    const keys = Object.keys(endState)

    expect(keys.length).toBe(1)
    expect(endState['todolistId2']).not.toBeDefined()
})
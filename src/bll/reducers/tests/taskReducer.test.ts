import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    taskReducer,
    TasksStateType
} from "../taskReducer";
import {addTodolistAC} from "../todolistReducer";
import {TaskPriorities, TaskStatuses} from "../../../dal/todolists-api";

let startState: TasksStateType

beforeEach(() => {
    startState = {
        'todolistId1': [
            {id: '1', todoListId:'todolistId1', title: "HTML&CSS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: '2',todoListId:'todolistId1', title: "JS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ],
        'todolistId2': [
            {id: '1', todoListId:'todolistId2', title: "Milk", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: '2',todoListId:'todolistId2', title: "React Book", status: TaskStatuses.InProgress, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ]
    }
})


test('correct task should be deleted from correct array', () => {


    const action = removeTaskAC('2', 'todolistId2')
    const endState = taskReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', todoListId:'todolistId1', title: "HTML&CSS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: '2', todoListId:'todolistId1', title: "JS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ],
        'todolistId2': [
            {id: '1', todoListId:'todolistId2', title: "Milk", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
        ]
    })
})
test('correct task should be added to correct array', () => {
    const action = addTaskAC('juce', 'todolistId2')
    const endState = taskReducer(startState, action)

    expect(endState['todolistId1'].length).toBe(2)
    expect(endState['todolistId2'].length).toBe(3)
    expect(endState['todolistId2'][0].id).toBeDefined()
    expect(endState['todolistId2'][0].title).toBe('juce')
})
test('status of specified task should be changed', () => {

    const action = changeTaskStatusAC('2', TaskStatuses.Draft, 'todolistId2')
    const endState = taskReducer(startState, action)

    expect(endState['todolistId2'][1].status).toBe(TaskStatuses.Draft)
    expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed)
})
test('title of specified task should be changed', () => {

    const action = changeTaskTitleAC('2', "juce", 'todolistId2')
    const endState = taskReducer(startState, action)

    expect(endState['todolistId2'][1].title).toBe("juce")
    expect(endState['todolistId1'][1].title).toBe('JS')
})
test('new array should be added when new todolist is added', () => {

    const action =  addTodolistAC('new todolist')
    const endState = taskReducer(startState, action)

    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2')
    if (!newKey) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})
import { Provider } from 'react-redux';
import React from 'react'
import {ReactNode} from "react";
import {combineReducers, legacy_createStore} from "redux";
import {taskReducer} from "../../bll/reducers/taskReducer";
import {TodolistDomainType, todolistReducer} from "../../bll/reducers/todolistReducer";
import {v1} from "uuid";
import {AppRootStateType} from "../../bll/store";
import {TaskPriorities, TaskStatuses} from "../../dal/todolists-api";

const rootReducer = combineReducers({
    tasks: taskReducer,
    todolists: todolistReducer
})

const initialGlobalState = {
    todolists: [
        {id: 'todolistId1', title: 'What to learn', filter: 'all', order: 0, addedDate: new Date()},
        {id: 'todolistId2', title: 'What to buy', filter: 'all', order: 0, addedDate: new Date()},
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), todoListId:'todolistId1', title: "HTML&CSS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: v1(),todoListId:'todolistId1', title: "JS", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ],
        ["todolistId2"]: [
            {id: v1(), todoListId:'todolistId2', title: "Milk", status: TaskStatuses.Completed, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()},
            {id: v1(),todoListId:'todolistId2', title: "React Book", status: TaskStatuses.InProgress, priority: TaskPriorities.Later, description: '', startDate: new Date(), deadline: new Date(), addedDate: new Date()}
        ]
    }
};

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as AppRootStateType);


export const ReduxStoreProviderDecorator = (storyFn: () => ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
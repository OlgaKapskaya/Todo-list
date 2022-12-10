import { Provider } from 'react-redux';
import React from 'react'
import {ReactNode} from "react";
import {combineReducers, legacy_createStore} from "redux";
import {taskReducer} from "../../BLL/reducers/taskReducer";
import {todolistReducer} from "../../BLL/reducers/todolistReducer";
import {v1} from "uuid";
import {AppRootStateType} from "../../BLL/store";

const rootReducer = combineReducers({
    tasks: taskReducer,
    todolists: todolistReducer
})

const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: false},
            {id: v1(), title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: false}
        ]
    }
};

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as AppRootStateType);


export const ReduxStoreProviderDecorator = (storyFn: () => ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
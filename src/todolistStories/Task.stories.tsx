import {Task} from "../Task";
import React from "react";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {TodolistWithReduxStory} from "./Todolist.stories";
import {AppWithReduxStory} from "./AppWithRedux.stories";


export default {
    title: 'TODOLIST/Task',
    component: Task,
    args: {
        todolistID: 'todolistId1',
    },
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args}/>;

// export const TaskStory = Template.bind({ });

// TaskStory.args = {
//
// }
// export const TaskIsDoneStory = Template.bind({ });
//
//
// export const TaskNotDoneStory = Template.bind({});
// TaskNotDoneStory.args = {
//     task: {id: 'taskID', title: 'taskTitle', isDone: false},
// }
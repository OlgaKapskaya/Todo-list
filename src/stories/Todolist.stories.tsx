import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";
import {Todolist} from "../Todolist";
import {AppWithReduxStory} from "./AppWithRedux.stories";

export default {
    title: 'TODOLIST/Todolist',
    component: Todolist,
    args: {
        todolistID: 'todolistId1'
    },
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Todolist>;
const Template: ComponentStory<typeof Todolist> = (args) => <Todolist {...args}/>;

export const TodolistWithReduxStory = Template.bind({});
TodolistWithReduxStory.args = {
    title: TodolistWithReduxStory.args?.title,
    filter: TodolistWithReduxStory.args?.filter,
}
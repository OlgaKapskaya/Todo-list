import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Input} from "../components/Imput";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TODOLIST/Input',
    component: Input,
    argTypes: {
        addItem: {
            description: 'Button is clicked'
        }
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const InputStory = Template.bind({});
InputStory.args = {
    addItem: action('Button clicked')
};



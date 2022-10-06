import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Switch from "components/Switch";

export default {
    title: "Form/Switch",
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;


export const Default = Template.bind({});
Default.args = {
    // checked: isChecked,
    onChange: ((e) => e.target.checked === true),
};

export const Small = Template.bind({});
Small.args = {
    // checked: isChecked,
    size:"small",
    onChange: ((e) => e.target.checked === true),
};

export const Medium = Template.bind({});
Medium.args = {
    // checked: isChecked,
    size:"medium",
    onChange: ((e) => e.target.checked === true),
};

export const Large = Template.bind({});
Large.args = {
    // checked: isChecked,
    size:"large",
    onChange: ((e) => e.target.checked === true),
};

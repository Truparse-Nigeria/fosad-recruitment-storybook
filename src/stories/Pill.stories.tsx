import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Pill from 'components/Pills';


export default {
    title: 'General/Pill',
    component: Pill,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

/* Default with no styling */
export const Default = Template.bind({});
Default.args = {
    label:"Default",
};


/* By Size */
export const Small = Template.bind({});
Small.args = {
    label:"Default",
    size:"small",
};

export const Medium = Template.bind({});
Medium.args = {
    label:"Default",
    size:"medium",
};

export const Large = Template.bind({});
Large.args = {
    label:"Default",
    size:"large",
};


/* By Type */
export const Active = Template.bind({});
Active.args = {
    type:"active",
};

export const OnHold = Template.bind({});
OnHold.args = {
    type:"onHold",
};

export const Completed = Template.bind({});
Completed.args = {
    type:"completed",
};

export const Cancelled = Template.bind({});
Cancelled.args = {
    type:"cancelled",
};

/* Job Status */

export const Applied = Template.bind({});
Applied.args = {
    type:"active",
};

export const Interview = Template.bind({});
Interview.args = {
    type:"interview",
};

export const Offer = Template.bind({});
Offer.args = {
    type:"offer",
};

export const Hired = Template.bind({});
Hired.args = {
    type:"hired",
};

export const Rejected = Template.bind({});
Rejected.args = {
    type:"rejected",
};
export const FullTime = Template.bind({});
FullTime.args = {
    type:"full-time",
};
export const Remote = Template.bind({});
Rejected.args = {
    type:"remote",
};

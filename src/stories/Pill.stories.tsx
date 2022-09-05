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
    label:"Active",
};

export const OnHold = Template.bind({});
OnHold.args = {
    type:"onHold",
    label:"On Hold",
};

export const Completed = Template.bind({});
Completed.args = {
    type:"completed",
    label:"Completed",
};

export const Cancelled = Template.bind({});
Cancelled.args = {
    type:"cancelled",
    label:"Cancelled",
};

/* Job Status */

export const Applied = Template.bind({});
Applied.args = {
    type:"active",
    label:"Applied",
};

export const Interview = Template.bind({});
Interview.args = {
    type:"interview",
    label:"Interview",
};

export const Offer = Template.bind({});
Offer.args = {
    type:"offer",
    label:"Offer",
};

export const Hired = Template.bind({});
Hired.args = {
    type:"hired",
    label:"Hired",
};

export const Rejected = Template.bind({});
Rejected.args = {
    type:"rejected",
    label:"Rejected",
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from 'components/Avatar';

export default {
    title: 'images/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;


export const Default = Template.bind({});
Default.args = {
    source:"https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
    size:"small",
}
export const DefaultWithInitials = Template.bind({});
DefaultWithInitials.args = {
    initials: "NM",
    colorClass:"bg-red-300",
};


export const Small = Template.bind({});
Default.args = {
    source:"https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
    size:"small",
    alt:"Sarah Dayan"
}
export const SmallWithInitials = Template.bind({});
SmallWithInitials.args = {
    initials: "NM",
    colorClass:"bg-red-300",
    size:'small'
};


export const Medium = Template.bind({});
Medium.args = {
    source:"https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
    size:"medium",
    alt:"Sarah Dayan"
}
export const MediumWithInitials = Template.bind({});
MediumWithInitials.args = {
    initials: "NM",
    colorClass:"bg-red-300",
    size:'medium'
};


export const Large = Template.bind({});
Large.args = {
    source:"https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
    size:"large",
    alt:"Sarah Dayan"
}
export const LargeWithInitials = Template.bind({});
LargeWithInitials.args = {
    initials: "NM",
    colorClass:"bg-red-300",
    size:'large'
};

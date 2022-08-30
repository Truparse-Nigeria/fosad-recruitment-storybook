import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SampleComponent from 'components/SampleComponent';

export default {
    title: 'Sample/Component',
    component: SampleComponent,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof SampleComponent>;

const Template: ComponentStory<typeof SampleComponent> = (args) => <SampleComponent {...args} />;

export const DarkSample = Template.bind({});
DarkSample.args = {
    textColor: "white",
    backgroundColor:"black",
    label:"Dark Sample Component"
};
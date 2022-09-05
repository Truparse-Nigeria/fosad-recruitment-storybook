import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';

import TextArea from 'components/TextArea';

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  args: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder:"Default..."
};


/* By Size */
export const Small = Template.bind({});
Small.args ={
  size:"small",
  placeholder:"Small"
}

export const Medium = Template.bind({});
Medium.args ={
  size:"medium",
  placeholder:"Medium"
}

export const Large = Template.bind({});
Large.args ={
  size:"large",
  placeholder:"Large"
}

/* By Theme */

export const Primary = Template.bind({});
Primary.args ={
  placeholder:"Primary",
  theme:'primary'
}

export const Secondary = Template.bind({});
Secondary.args ={
  placeholder:"Secondary",
  theme:'secondary'
}
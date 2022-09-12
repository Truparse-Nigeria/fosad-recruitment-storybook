import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from "components/Icon";

export default {
    title: "Images/Icons",
    component: Icon,
  } as ComponentMeta<typeof Icon>;

  const Template: ComponentStory<typeof Icon> = (args) =>  <Icon {...args} />;


export const Default = Template.bind({});
Default.args = {
  icon:"inbox"
};

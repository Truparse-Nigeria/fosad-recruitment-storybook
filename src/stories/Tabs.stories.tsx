import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabContainer from "components/Tabs";
import Tabs from "components/Tabs";

import React from "react";

export default {
  title: "Component/Tab",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (<TabContainer {...args}>
  
   
</TabContainer>)

export const AdminTab = Template.bind({});
AdminTab.args = {
  title: "suggested jobs",
  theme: "light",
  foreground: "black"
};

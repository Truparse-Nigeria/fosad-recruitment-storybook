import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebars from "components/Sidebars";
import Sidebar from "components/Sidebars";



export default {
  title: "Component/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebars {...args} />
  );

export const Default = Template.bind({});
Default.args = {}
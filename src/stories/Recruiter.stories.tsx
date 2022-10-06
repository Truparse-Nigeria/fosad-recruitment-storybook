import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebars from "components/Sidebars";
import Sidebar from "components/Sidebars";
import RecruiterSidebar from "components/RecruiterSidebar";



export default {
  title: "Component/RecruiterSidebar",
  component: RecruiterSidebar,
} as ComponentMeta<typeof RecruiterSidebar>;

const Template: ComponentStory<typeof RecruiterSidebar> = (args) => (
    <RecruiterSidebar {...args} />
  );

export const Default = Template.bind({});
Default.args = {}
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cards from "components/Cards";
import Card from "components/Cards";



export default {
  title: "Component/Cards",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => (
    <Cards {...args} />
  );

export const Default = Template.bind({});
Default.args = {}
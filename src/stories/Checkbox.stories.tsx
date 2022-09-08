import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from "components/Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) =>  <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  type:"rounded",
  size:"large",
  color:"secondary",
  checked:true,
  onChange: (e) => e.currentTarget.checked = !e.currentTarget.checked
};

export const Primary = Template.bind({});
Primary.args = {
  name: "Hello",
  color:"primary",
  onChange: (e) => console.log(e)
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "Hello",
  color:"secondary",
  onChange: (e) => console.log(e)
};

export const Black = Template.bind({});
Black.args = {
  name: "Hello",
  color:"black",
  onChange: (e) => console.log(e)
};

export const Small = Template.bind({});
Small.args = {
  size:"small",
  onChange: (e) => console.log(e)
};

export const Medium = Template.bind({});
Medium.args = {
  size:"medium",
  onChange: (e) => console.log(e)
};

export const Large = Template.bind({});
Large.args = {
  size:"large",
  onChange: (e) => console.log(e)
};

export const Rounded = Template.bind({});
Rounded.args = {
  type:"rounded",
  onChange: (e) => console.log(e)
};

export const Squared = Template.bind({});
Squared.args = {
  type:"squared",
  onChange: (e) => console.log(e)
};

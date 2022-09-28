import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from "components/Radio";

export default {
  title: "Form/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) =>  <Radio {...args} />;

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
  type: "rounded",
  onChange: (e) => console.log(e)
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "Hello",
  color:"secondary",
  type: "rounded",
  onChange: (e) => console.log(e)
};

export const Black = Template.bind({});
Black.args = {
  name: "Hello",
  color:"black",
  type: "rounded",
  onChange: (e) => console.log(e)
};

export const Small = Template.bind({});
Small.args = {
  size:"small",
  type: "rounded",
  onChange: (e) => console.log(e)
};

export const Medium = Template.bind({});
Medium.args = {
  size:"medium",
  type: "rounded",
  onChange: (e) => console.log(e)
};

export const Large = Template.bind({});
Large.args = {
  size:"large",
  type: "rounded",
  onChange: (e) => console.log(e)
};

export const Rounded = Template.bind({});
Rounded.args = {
  type:"rounded",
  onChange: (e) => console.log(e)
};


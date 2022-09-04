import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from "components/Checkbox";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <label>
    <Checkbox {...args} />
  </label>
);

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {
  label: "Hello World!",
  name: "Hello",
  onChange: () => {}
};

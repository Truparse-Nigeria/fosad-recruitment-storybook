import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from "components/Input";


export default {
  title: "Form/Inputs",
  component: Input,
} as  ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <Input {...args} />
  );

  export const Default = Template.bind({});
  Default.args = {
    placeholder:"Default..."
   };

export const TextInputWithSubtext = Template.bind({});
TextInputWithSubtext.args = {
  type: "text",
  placeholder: "search for candidate",
  subText: "search for candidate",
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


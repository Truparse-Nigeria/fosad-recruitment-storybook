import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "components/Select";


export default {
  title: "Form/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;




export const NormalSelectField = Template.bind({});
NormalSelectField.args = {
  options: [
    { text: "N 500", value: "500" },
    { text: "N 5,000", value: "5000" },
    { text: "N 15,000", value: "15000" },
    { text: "N 50,000", value: "50000" },
    { text: "N 100,000", value: "100000" },
    { text: "N 150,000", value: "150000" },
  ],
  defaultValue: "",
  placeholder: "Select option",
  
  borderRadius: "10px 0px 0px 10px",
  handleChange: (e: any) => console.log(e)
};

export const DefaultValueSelectField = Template.bind({});
DefaultValueSelectField.args = {
  options: [
    { text: "N 500", value: "500" },
    { text: "N 5,000", value: "5000" },
    { text: "N 15,000", value: "15000" },
    { text: "N 50,000", value: "50000" },
    { text: "N 100,000", value: "100000" },
    { text: "N 150,000", value: "150000" },
  ],
  defaultValue: "100000",
  placeholder: "Select option",
  borderRadius: "10px",
  height: 180,
  handleChange: (e: any) => console.log(e)
};

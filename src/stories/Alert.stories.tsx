import { ComponentMeta, ComponentStory } from "@storybook/react";
import AlertContainer from "../components/Alert";
import Alert from "../components/Alert"


export default {
    title: 'Component/Alert',
    component: Alert,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const successAlert = Template.bind({});
successAlert.args = {
    variant: "success",
    message: "you have succesfully logged in"
}
export const warningAlert = Template.bind({});
warningAlert.args = {
    variant: "warning",
    message: "you have succesfully logged in"
}

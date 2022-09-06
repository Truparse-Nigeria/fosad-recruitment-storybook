import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "Images/Icons",
    component: Icons,
  } as ComponentMeta<typeof Icons>;

  const Template: ComponentStory<typeof Icons> = (args) =>  <Icons {...args} />;

import SvgFinance from "icons/Finance";
import SvgInbox from "icons/Inbox";
import SvgJobs from "icons/Jobs";
import SvgTeam from "icons/Team";
import SvgSettings from "icons/Settings";
import SvgCandidates from "icons/Candidates";
import Icons from "components/Icons";


export const FinanceIcon = () => <SvgFinance width={22} height={22} />;
export const InboxIcon = () => <SvgInbox width={20} height={16} />;
export const JobsIcon = () => <SvgJobs width={20} height={20} />;
export const TeamIcon = () => <SvgTeam width={20} height={18} />;
export const SettingsIcon = () => <SvgSettings width={20} height={20} />;
export const CandidatesIcon = () => <SvgCandidates width={20} height={20} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: "#002D5B",
  width: 32,
  height: 32,
  size: "medium"
};

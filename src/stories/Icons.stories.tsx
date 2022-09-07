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
import SvgArrowDown from "icons/ArrowDown";
import SvgArrowForward from "icons/ArrowForward";
import SvgPlus from "icons/Plus";
import SvgEducation from "icons/Education";
import SvgResume from "icons/Resume";
import SvgSkills from "icons/Skills";
import SvgOtherInfo from "icons/OtherInfo";
import SvgOverview from "icons/Overview";
import SvgEdit from "icons/Edit";
import SvgTrash from "icons/Trash";
import SvgLocation from "icons/Location";
import SvgAction from "icons/Action";
import SvgMenu from "icons/Menu";
import SvgMinus from "icons/Minus";
import SvgSearch from "icons/Search";
import Icons from "components/Icons";


export const FinanceIcon = () => <SvgFinance width={22} height={22} />;
export const InboxIcon = () => <SvgInbox width={20} height={16} />;
export const JobsIcon = () => <SvgJobs width={20} height={20} />;
export const TeamIcon = () => <SvgTeam width={20} height={18} />;
export const SettingsIcon = () => <SvgSettings width={20} height={20} />;
export const CandidatesIcon = () => <SvgCandidates width={20} height={20} />;
export const ArrowDownIcon = () => <SvgArrowDown width={12} height={8} />;
export const ArrowForwardIcon = () => <SvgArrowForward width={21} height={20} />;
export const PlusIcon = () => <SvgPlus width={16} height={17} />;
export const EducationIcon = () => <SvgEducation width={20} height={20} />;
export const ResumeIcon = () => <SvgResume width={16} height={20} />;
export const SkillsIcon = () => <SvgSkills width={16} height={23} />;
export const OtherInfoIcon = () => <SvgOtherInfo width={18} height={20} />;
export const OverviewIcon = () => <SvgOverview width={22} height={22} />;
export const EditIcon = () => <SvgEdit width={8} height={18} />;
export const TrashIcon = () => <SvgTrash width={16} height={18} />;
export const LocationIcon = () => <SvgLocation width={16} height={20} />;
export const ActionIcon = () => <SvgAction width={4} height={16} />;
export const MenuIcon = () => <SvgMenu width={15} height={4} />;
export const MinusIcon = () => <SvgMinus width={12} height={12} />;
export const SearchIcon = () => <SvgSearch width={18} height={18} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: "#002D5B",
  width: 32,
  height: 32,
  size: "medium"
};

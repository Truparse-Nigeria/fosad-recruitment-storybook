import Icon from 'components/Icon';
import { candidates, jobs } from 'components/Icon/icons';
import React from 'react'

const menuItems = [
    {text: 'Job Openings', iconSrc:<Icon icon="jobs"/>, href: ""},
    {text: 'Candidates', iconSrc: <Icon icon="candidates"/>, href: ""},
    {text: 'Inbox', iconSrc: <Icon icon="inbox"/>, href: ""},
    {text: 'Finance', iconSrc: <Icon icon="finance"/>, href: ""},
    {text: 'Team', iconSrc: <Icon icon="team"/>, href: ""},
    {text: 'Settings', iconSrc: <Icon icon="settings"/>, href: ""},
    // {text: 'Logout', iconSrc: <Icon icon="arrowForward"/>, href: ""}
];

interface MenuItemsProps {
    text?: string;
    href?: string;
    iconSrc?: string
}



function Sidebar({text, iconSrc, href}: MenuItemsProps) {
  return (
    <nav className='h-screen w-60 bg-secondary text-white mr-4'>
        <ul>
            {menuItems.map(({text, href, iconSrc}) => (
                <li className={`flex p-3 flex-row items-center ml-2`}>
                    <link href={href} />
                    {iconSrc}
                    <a className='ml-2'>
                        
                        {text}</a>
            </li>
            ))}
            
        </ul>
        <ul>
            <li className='flex flex-row items-center p-3 absolute bottom-0'>
                <div className='m-2'>
                <Icon icon={"arrowForward"} />
                </div>
                
                Logout</li>
        </ul>
    </nav>
  )
}


export default Sidebar;

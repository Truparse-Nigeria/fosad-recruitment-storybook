import Icon from 'components/Icon';
import React from 'react'

const menuItems = [
    {text: 'Overview', iconSrc:<Icon icon="overview"/>, href: "#"},
    {text: 'Work Experience', iconSrc: <Icon icon="work"/>, href: "#"},
    {text: 'Education', iconSrc: <Icon icon="education"/>, href: "#"},
    {text: 'Resume', iconSrc: <Icon icon="resume"/>, href: "#"},
    {text: 'Skills', iconSrc: <Icon icon="skills"/>, href: "#"},
    {text: 'OtherInfo', iconSrc: <Icon icon="otherInfo"/>, href: "#"},
    {text: 'My Account', iconSrc: <Icon icon="account"/>, href: "#"}
];

interface MenuItemsProps {
    text?: string;
    href?: string;
    iconSrc?: string
}



function RecruiterSidebar({text, iconSrc, href}: MenuItemsProps) {
  return (
    <nav className='h-[60%] w-60 bg-gray-100 text-[background: #63748A;
    ] mr-4 rounded'>
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
    </nav>
  )
}


export default RecruiterSidebar;

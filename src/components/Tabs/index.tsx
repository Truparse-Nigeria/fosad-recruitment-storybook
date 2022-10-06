import React, { ReactElement, useState } from 'react'
import { TabItem } from './tabs'
interface TabContainerProps {
    children?:  ReactElement | ReactElement[];
    tabName?: string;
    title?:string;
    theme?: "dark" | "light";
    foreground?: "primary" | "secondary" | "black";
}

 function TabContainer(props: TabContainerProps) {

    return (
        <div className='bg-white space-x-3 border flex w-full'>
            {props.children}
        </div>
    )
}

export default TabContainer;
  
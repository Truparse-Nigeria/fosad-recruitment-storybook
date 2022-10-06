import { ComponentSize } from 'components/types';
import React, { ReactChild, ReactChildren } from 'react'
import { Icon, Pill } from '..';


interface CardProps {
    bgColor: string;
    children: JSX.Element;
    padding: ComponentSize;
}

export default function Card({bgColor, children, padding}:CardProps) {
  return (
    <div color={bgColor} className="bg-gray-100 w-[456px] h-[315px] rounded inline-block">
        <div  className='flex flex-row justify-between p-4'>
          <p className='font-semibold text=[#0C162A]  text-[24px]'>Product Designer For Global Fintach Product </p>
          <Icon icon='menu' />
        </div>
        <div className='text-[#63748A] leading-[19px] flex flex-row pl-4'><Icon icon='location'/> Lagos, Nigeria</div>
        <ul className='flex flex-row p-2 m-2'>
            <li className=' rounded-full max-w-fit items-center flex justify-between gap-x-2 py-1 px-4 m-1 bg-[#CFF8F5]'>$250,000/yr</li>
            <li className=' rounded-full max-w-fit items-center flex justify-between gap-x-2 py-1 px-4 m-1 bg-[#E5D0FB]'>Full-Time</li>
            <li className=' bg-[#E1EFC2] rounded-full max-w-fit items-center flex justify-between gap-x-2 m-1 py-1 px-4'>Remote</li>
        </ul>
        <p className='max-w-[120ch] overflow-hidden whitespace-normal text-ellipsis pl-4 text-[#A0ABB4]'>Are you looking for a unique opportunity that allows you to help children and families struggling with</p>
        <div className='flex flex-row justify-between p-4'>
            <Pill label="Interview" size="medium" type={'interview'}></Pill>
            <button className='text-secondary rounded border-secondary text-[16px] px-4 py-3 w-32'>See details</button>
        </div>
    </div>
  )
}

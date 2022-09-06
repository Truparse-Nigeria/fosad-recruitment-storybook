import { ComponentSize } from 'components/types';
import React, { ReactElement } from 'react'

interface IconProps {
    children?: ReactElement;
    bgColor?: string;
    height?: number;
    width?: number;
    size?: ComponentSize;
  }
  

function Icons( {children, bgColor, height, width, size}: IconProps) {
  return (
    <div
    className={`${
        size === "small"
          ? "w-9 h-9"
          : size === "medium"
          ? "w-11 h-11"
          : size === "large"
          ? "w-17 h-17"
          : "w-10 h-10 h"
      }  mx-1 my-1`}
      
      >
      width={width}
      height={height}
      bgColor={`${"#002D5B"}`}
      children={children}
    </div>
  )
}

export default Icons
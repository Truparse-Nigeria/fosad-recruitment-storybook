import Checkbox from 'components/Checkbox';
import Icon from 'components/Icon';
import { ComponentSize } from 'components/types';
import React, { useState } from 'react';
// import { Icon } from '..';



interface InputProps {
  subText?: string;
  type: string;
  placeholder: string;
  width?: string;
  margin?: boolean;
  onSubmit?: () => void;
  size?: ComponentSize;
  theme?: "primary" | "secondary";

}



function Input({ size, theme, placeholder, type, width, margin, onSubmit }: InputProps) {

  const [search, setSearch] = useState("")
  return (
    <div className='search'>
      {/* // type="text"
      placeholder="search"
      // onChange={e => {setSearch(e.target.value)}} */}
      <div className='searchIcon'><Icon icon="search"  /></div>
      <input type="text" className={`m-2 rounded-lg ${size === "small"
      ? "text-sm"
      : size === "medium"
        ? "w-[400px] text-base"
        : size === "large"
          ? "w-[400px] min-h-[10px] text-lg"
          : "w-[400px] text-lg"
    } bg-white border-2 ${theme === "primary"
      ? "border-[#002D5B]"
      : "border-[#63748A] active:border-[#63748A] focus:border-[#63748A]"
    }  text-[#63748A]  placeholder:text-[#63748A] px-6 py-5`}
    placeholder="search"
    />
      
      
       
    </div>

  );
}


export default Input;

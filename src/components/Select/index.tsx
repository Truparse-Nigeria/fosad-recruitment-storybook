import React from "react";
import type { ComponentSize } from "components/types";
import { Checkbox } from "..";

interface SelectProps {
  //   value: string;
  size: ComponentSize;
  placeholder?: "Select option",
  theme?: "primary" | "secondary",
  options: Options[];
    
    borderRadius?: string;
    handleChange: Function;
    
    defaultValue?: string;
    height?: number

}
type Options = {
  value: string;
  text: string;
};

function Select ({ size, theme, placeholder, options }: SelectProps) {
  return (
    <select
      className={`m-2 rounded-lg ${
        size === "small"
          ? "text-sm"
          : size === "medium"
          ? "w-[512px] text-base"
          : size === "large"
          ? "w-[648px] min-h-[116px] text-lg"
          : "w-[648px] text-lg"
      } bg-white border-2 ${
        theme === "primary"
          ? "border-[#002D5B]"
          : "border-[#63748A] active:border-[#63748A] focus:border-[#63748A]"
      }  text-[#63748A]  placeholder:text-[#63748A] px-6 py-5`}
      placeholder={placeholder}
    >
    </select>
  );
}
 
export default Select;





import type { ComponentSize } from "components/types"; 
import React from "react";

interface TextAreaProps {
  //   value: string;
  size: ComponentSize;
  placeholder: string;
  theme?: "primary" | "secondary";
}

function TextArea({ size, theme, placeholder }: TextAreaProps) {
  return (
    <textarea
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
    ></textarea>
  );
}

export default TextArea;

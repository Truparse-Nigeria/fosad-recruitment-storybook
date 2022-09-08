import { ComponentSize } from "components/types";
import React, { ReactElement } from "react";

interface ButtonProp {
  label: string;
  size?: ComponentSize;
  rounded?: boolean;
  color: "primary" | "secondary" | "white";
  icon?: ReactElement;
  iconRight?:ReactElement;
  iconLeft?:ReactElement;
}

function Button({ label, size, rounded, color, icon, iconLeft, iconRight }: ButtonProp) {
  return (
    <button
      className={`${rounded ? "rounded-full" : "rounded-lg"} ${
        size === "small" ? "text-[16px] px-5 py-[14px]" : ""
      }
      ${
        color === "primary"
          ? "bg-primary"
          : color === "secondary"
          ? "bg-secondary text-white"
          : color === "white"
          ? "bg-white border border-[#DEE3E9]"
          : ""
      }`}
    >
      {label}
    </button>
  );
}

export default Button;

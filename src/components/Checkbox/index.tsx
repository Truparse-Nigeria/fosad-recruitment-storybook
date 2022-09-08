import type { ComponentSize } from "components/types";
import React, { ChangeEventHandler } from "react";

interface CheckboxProps {
  name?: string;
  id?: string;
  type: "rounded" | "squared";
  size: ComponentSize;
  color: "primary" | "secondary" | "black";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked:boolean;
}

function Checkbox({ id, name, onChange, type, color, size, checked }: CheckboxProps) {

  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      onChange={onChange}
      checked={checked}
      className={`${
        type === "rounded" ? "rounded-full" : "rounded"
      } border border-[#C3C9CE] ${
        color === "primary"
          ? "text-primary ring-primary active:ring-primary focus:ring-primary"
          : color === "secondary"
          ? "text-secondary ring-secondary active:ring-secondary focus:ring-secondary"
          : color === "black"
          ? "text-black ring-black active:ring-black focus:ring-black"
          : "text-gray-700"
      } ${
        size === "small"
          ? "p-1"
          : size === "medium"
          ? "p-2"
          : size === "large"
          ? "p-3"
          : "p-2"
      }`}
    />
  );
}

export default Checkbox;

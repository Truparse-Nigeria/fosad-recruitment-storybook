import { ComponentSize } from "components/types";
import React, { ChangeEventHandler } from "react";

interface SwitchProps {
  id?: string;
  value?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size: ComponentSize;
}

function Switch({ id, value, checked, size, onChange }: SwitchProps) {
  const randId = `${Math.floor(Math.random() * 1000)}-switch-${Math.floor(
    Math.random() * 1000
  )}`;

  return (
    <div className="switch">
      <input id={id ? id : randId} value={value} checked={checked} onChange={onChange} className="switch-input" type="checkbox" />
      <label htmlFor={id ? id : randId} className={`switch-label ${size === "small" ? "switch-label-sm" : size === "medium" ? "switch-label-md" : size === "large" ? "switch-label-lg" : "switch-label-default"}`}></label>
    </div>
  );
}

export default Switch;
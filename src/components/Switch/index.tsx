import React, { ChangeEventHandler } from "react";


/* 
** Todo: Fix the css part of the Switch
*
*/
interface SwitchProps {
  id?: string;
  value?:string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>; 
}

function Switch({ id,value, checked, onChange }: SwitchProps) {
  const randId = `${Math.floor(Math.random() * 1000)}-switch-${Math.floor(
    Math.random() * 1000
  )}`;

  return (
    <div className="switch w-2/4">
      <input id={id?id:randId} value={value} checked={checked} onChange={onChange} className="switch-input" type="checkbox" />
      <label htmlFor={id?id:randId} className="switch-label"></label>
    </div>
  );
}

export default Switch;

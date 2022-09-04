import React from 'react'

interface CheckboxProps {
    label?: string;
    name?:string;
    onChange?:Function;
  }

  function Checkbox({ label, name, onChange}: CheckboxProps) {
    return (
        <div >
            <h1>{label}</h1>
        </div>
    )
}

export default Checkbox
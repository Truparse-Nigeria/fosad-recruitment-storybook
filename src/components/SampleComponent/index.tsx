// import Pill from 'components/Pills'
<<<<<<< HEAD
import Button from 'components/Button'
import React, { ReactElement } from 'react'
=======
import Switch from 'components/Switch'
import Button from 'components/Button'
import React, { ReactElement, useState } from 'react'
>>>>>>> 641507772fdf87fe239aba2f54e9f8dcbdf55458

interface SampleProps {
    label: string
    textColor: string
    backgroundColor: string
    children?: ReactElement
}

function SampleComponent({ label, textColor,backgroundColor, children }: SampleProps) {
    const [isChecked, setChecked] = useState(false)
    return (
        <div className={`py-4 px-4 bg-${backgroundColor} text-${textColor}`}>
            <h1>{label}</h1>
            <div>{children}</div>
            {/* <Pill label='Active' type='offer' size='medium' /> */}
<<<<<<< HEAD
            <Button label='Button' size='large' color='secondary'/>
=======
            <Switch checked={isChecked} onChange={(e)=>setChecked(!isChecked)} />
            <Button label='Button' size='large' color='secondary'/>

>>>>>>> 641507772fdf87fe239aba2f54e9f8dcbdf55458
        </div>
    )
}

export default SampleComponent
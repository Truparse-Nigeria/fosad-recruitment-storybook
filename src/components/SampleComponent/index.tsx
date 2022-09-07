// import Pill from 'components/Pills'
<<<<<<< HEAD
// import Switch from 'components/Switch'
=======
import Button from 'components/Button'
>>>>>>> b4587a18c91722904068705345a4660947ba2339
import React, { ReactElement } from 'react'

interface SampleProps {
    label: string
    textColor: string
    backgroundColor: string
    children?: ReactElement
}

function SampleComponent({ label, textColor,backgroundColor, children }: SampleProps) {
    return (
        <div className={`py-4 px-4 bg-${backgroundColor} text-${textColor}`}>
            <h1>{label}</h1>
            <div>{children}</div>
            {/* <Pill label='Active' type='offer' size='medium' /> */}
<<<<<<< HEAD
            {/* <Switch /> */}
=======
            <Button label='Button' size='large' color='secondary'/>
>>>>>>> b4587a18c91722904068705345a4660947ba2339
        </div>
    )
}

export default SampleComponent
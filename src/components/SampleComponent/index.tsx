// import Pill from 'components/Pills'
import Button from 'components/Button'
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
            <Button label='Button' size='large' color='secondary'/>
        </div>
    )
}

export default SampleComponent
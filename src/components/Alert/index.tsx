import { StringifyOptions } from 'querystring';
import React from 'react'
import { Icon } from '..';
import { AlertVariant } from './alert';


interface AlertContainerProps {
    variant?: string;
    message?: string;
    noBorder?:boolean;
    title?: String;
}

interface AlertMessageProps {
    variant?:string;
    message?: string;
    noBorder?: string;
}
interface IconWrapperProps {
    variant?:string;
    message?: string;
    noBorder?: boolean;
}



const AlertMessage = ({
    variant,
    message,
    noBorder
}: AlertMessageProps) => {
    return (
        <div className='flex'>{message}</div>
    )
}

export const PlainAlert = AlertMessage;

const IconWrapper = ({
    variant,
    message,
    noBorder
}: IconWrapperProps) => {
    return (
        <div className={`flex justify-center items-center pr-2}`}>
            {variant === AlertVariant.SUCCESS && <Icon icon= "plus" /> }
            {variant === AlertVariant.WARNING && <Icon icon= "arrowForward" /> }
            {variant === AlertVariant.ERROR && <Icon icon ="minus"/> }
        </div>
    )
}

export const PlainWrapper = IconWrapper;



function AlertContainer(props: AlertContainerProps) {
  return (
    <div className= {`flex w-full max-w-sm rounded ml-4 mt-5 pt-4 pb-6 pr-3 ${props.noBorder ? 'p-0' : 'p-5'} &{(props) => {
        if (props.variant === "success") {
            return bg-green-600 text-white
        }
        else if (props.variant === "warning") {
            return (bg-yellow-600 text-white)
            
        }
         else (props.variant === "error") {
            return bg-red-600 text-white
        }
    }}`}>
     
    </div>
  )
}
 
export default AlertContainer
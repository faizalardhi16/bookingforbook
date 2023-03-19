import { Fragment } from "react"
import { InputTextStyle } from "./InputTextStyle.classname"


type InputTextProps = React.HTMLProps<HTMLInputElement>

export const InputText: React.FC<InputTextProps> = (props) => {
    return (
        <Fragment>
            {props.label ? <label className={InputTextStyle.labelClassName}>{props.label}</label> : null}
            <input
                {...props}
                className={`${InputTextStyle.className} ${props.className}`}
            />
        </Fragment>

    )
}
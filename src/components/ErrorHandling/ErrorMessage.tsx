import { FC, Fragment } from "react";


export interface ErrorMessageProps {
    error?: {
        message?: string;
    }
}

export const ErrorMessage: FC<ErrorMessageProps> = (props) => {
    return (
        <Fragment>
            {props.error && <p className="text-xs text-rose-600 my-2">{props.error?.message}</p>}
        </Fragment>
    )
}
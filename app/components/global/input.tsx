import { Field, ErrorMessage } from "formik";
import React from "react";

interface Props{
    name : string,
    label? : string,
    type? : string,
    placeholder? : string,
    className? : string,
    inputClassName? : string,
    labelClassName? : string,
    errorClassName? : string,
}

const Input : React.FC<Props> = ({ name, label, className, placeholder, type = "text", errorClassName, labelClassName, inputClassName }) => {


    return(
        <>
            <div className={`col-span-6 sm:col-span-3 ${className ?? ''}`}>
                {
                    label
                        ? <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>
                            {label}
                        </label>
                        : ''
                }
                
                <Field
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    autoComplete={name}
                    className={`${label ? "mt-1" : ''} block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${inputClassName ?? ''}`}
                />
                <ErrorMessage name={name} className={`text-red-500 text-sm ${errorClassName ?? ''}`} component="div" />
            </div>
        </>
    )
}

export default Input;
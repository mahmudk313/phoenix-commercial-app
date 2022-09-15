import { Field } from "formik";
import React from "react";

interface Props{
    name : string,
    label : string,
    className?: string,
    type?: string,
}

const Input : React.FC<Props> = ({ name, label, className, type }) => {


    return(
        <>
            <div className={className ? className : "col-span-6 sm:col-span-3"}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <Field
                    type={type? type : "text"}
                    name={name}
                    id={name}
                    autoComplete={name}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </>
    )
}

export default Input;
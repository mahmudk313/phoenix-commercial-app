import { LockClosedIcon } from "@heroicons/react/20/solid"
import { Form, FormikProps } from "formik"

import { LoginFormValuesInterface } from "../../contracts/auth"

import Input from "../global/input"

const InnerLoginForm = (props : FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <Input
                        name="phone"
                        inputClassName="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Phone number"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">

                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign in
                </button>
            </div>
        </Form>
    )
}

export default InnerLoginForm;
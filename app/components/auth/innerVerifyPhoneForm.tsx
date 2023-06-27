import { Form, FormikProps } from "formik";
import { VerifyPhoneFormValuesInterface } from "../../contracts/auth";
import Input from "../global/input";


const InnerVerifyPhoneForm = (props : FormikProps<VerifyPhoneFormValuesInterface>) => {
    return (
        <Form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <Input
                        name="code"
                        inputClassName="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter code number"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Verify
                </button>
            </div>
        </Form>

    )
}

export default InnerVerifyPhoneForm;
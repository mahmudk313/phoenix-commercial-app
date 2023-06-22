import { Form, FormikProps } from "formik"
import { RegisterFormValuesInterface } from "../../contracts/auth"
import Input from "../global/input"

const InnerRegisterForm = (props : FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                        <Input name="name" label="name" />
                        <Input name="phone" label="phone" />

                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </Form>
    )
}

export default InnerRegisterForm;
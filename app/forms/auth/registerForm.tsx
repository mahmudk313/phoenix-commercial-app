import { Form, FormikProps, withFormik } from 'formik'
import Input from '../../components/global/input'
import registerSchema from '../../schema/registerSchema'

interface RegisterFormValues {
    name : string,
    lastName : string,
    email : string,
    password : string
}

const InnerRegisterForm = (props : FormikProps<RegisterFormValues>) => {
    return (
        <Form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                        <Input name="name" label="First Name" />
                        <Input name="lastName" label="Last name" />
                        <Input name="email" label="Email" type="email" className="col-span-6 sm:col-span-6" />
                        <Input name="password" label="Password" className="col-span-6 sm:col-span-6" type="password" />

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

interface RegisterFormProps {

}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
    mapPropsToValues : props => {
        return {
            name : "",
            lastName : "",
            email :"",
            password : ""
        }
    },
    validationSchema : registerSchema,
    handleSubmit : (values) => {
        console.log(values)
    }
})(InnerRegisterForm)

export default RegisterForm;
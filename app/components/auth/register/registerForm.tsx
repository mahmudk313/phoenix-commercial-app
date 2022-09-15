import React, { FormEvent, useState } from 'react'
import Input from '../../global/input'
import User from '../../../models/user'
import registerSchema from '../../../schema/registerSchema'
import { Formik, Form } from 'formik'
interface RegisterFromValues {
    name : string,
    lastName : string,
    email : string,
    password : string
}

const RegisterForm: React.FC = () => {

    const initialValues : RegisterFromValues = {
        name : "",
        lastName : "",
        email : "",
        password : ""
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

                            <Input name="name" label="First Name" />
                            <Input name="lastName" label="Last name" />
                            <Input name="email" label="Email" className="col-span-6 sm:col-span-6" />
                            <Input name="Password" label="Password" className="col-span-6 sm:col-span-3" type="password" />

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
        </Formik>
    )
}

export default RegisterForm;
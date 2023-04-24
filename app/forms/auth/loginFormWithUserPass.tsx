import React from "react";
import { Form, FormikProps, withFormik } from "formik";

//Components
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";

interface loginFormProps {
    setCookie : any,
}

const LoginForm = withFormik<loginFormProps, LoginFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            email : "",
            password : "",
            phone : 0
        }
    },
    handleSubmit : async (values, { props , setFieldError }) => {
        try {
            const res = await callApi().post('auth/login', values)
            if (res.status === 200) {
                props.setCookie('phoenix-token', res.data.token, {
                    'maxAge' : 3600 * 24 * 30,
                    'sameSite'  : 'lax',
                    'domain' : 'localhost',
                    'path' : '/'
                })
            }
        }
        catch (error) {
            if(error instanceof ValidationError) {
                Object.entries(error.messages).forEach( ( [key , value]) => setFieldError (key, value as string))
            }
        }
    }
})(InnerLoginForm)

export default LoginForm;
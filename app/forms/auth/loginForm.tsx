import React from "react";
import { Form, FormikProps, withFormik } from "formik";

//Components
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";

interface loginFormProps {
    setCookie : any,
}

const LoginForm = withFormik<loginFormProps, LoginFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            email : "",
            password : ""
        }
    },
    handleSubmit : async (values, { props }) => {
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
})(InnerLoginForm)

export default LoginForm;
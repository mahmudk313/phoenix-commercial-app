import React from "react";
import { Form, FormikProps, withFormik } from "formik";

//Components
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";

interface loginFormProps {
}

const LoginForm = withFormik<loginFormProps, LoginFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            email : "",
            password : ""
        }
    },
    handleSubmit : async (values) => {
        const res = await callApi().post('auth/login', values)
        console.log(res)
    }
})(InnerLoginForm)

export default LoginForm;
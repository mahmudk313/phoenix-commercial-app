import React from "react";
import { Form, FormikProps, withFormik } from "formik";

//Components
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";

interface loginFormProps {
}

const LoginForm = withFormik<loginFormProps, LoginFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            email : "",
            password : ""
        }
    },
    handleSubmit : (values) => {
        console.log(values)
    }
})(InnerLoginForm)

export default LoginForm;
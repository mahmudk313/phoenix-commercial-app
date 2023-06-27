import { withFormik } from "formik";

//helpers
import callApi from "../../helpers/callApi";

//Components
import { VerifyPhoneFormValuesInterface } from "../../contracts/auth";
import Router from "next/router";
import ValidationError from "../../exceptions/validationError";
import InnerVerifyPhoneForm from "../../components/auth/innerVerifyPhoneForm";

interface verifyPhoneFormProps {
    setCookie : any,
    cookies : any
}

const VerifyPhoneForm = withFormik<verifyPhoneFormProps, VerifyPhoneFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            token : props.cookies["phoenix-token"],
            code : 0
        }
    },
    handleSubmit : async (values, { props , setFieldError } ) => {
        try {
            const res = await callApi().post('auth/login/verify-phone', values)
            if (res.status === 200) {
                props.setCookie('phoenix-token', res.data.user.token, {
                    'max-age' : 3600 * 24 * 30,
                    'sameSite' : 'lax',
                    'domain' : 'localhost',
                    'path' : '/'
                })

                Router.push('/dashboard')
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key , value as string))
            }
        }
    }
})(InnerVerifyPhoneForm)

export default VerifyPhoneForm;
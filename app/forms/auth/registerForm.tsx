import { withFormik } from 'formik'


import InnerRegisterForm from '../../components/auth/innerRegisterForm'
import { RegisterFormValuesInterface } from '../../contracts/auth'
import callApi from '../../helpers/callApi'
import registerSchema from '../../schema/registerSchema'

interface RegisterFormProps {

}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            name : "",
            lastName : "",
            email :"",
            password : ""
        }
    },
    validationSchema : registerSchema,
    handleSubmit : async (values) => {
        const res = await callApi().post('/auth/register', values)
        console.log(res)
    }
})(InnerRegisterForm)

export default RegisterForm;
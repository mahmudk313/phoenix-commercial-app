import { withFormik } from 'formik'


import InnerRegisterForm from '../../components/auth/innerRegisterForm'
import { RegisterFormValuesInterface } from '../../contracts/auth'
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
    handleSubmit : (values) => {
        console.log(values)
    }
})(InnerRegisterForm)

export default RegisterForm;
import { withFormik } from 'formik'
import Router from 'next/router'


import InnerRegisterForm from '../../components/auth/innerRegisterForm'
import { RegisterFormValuesInterface } from '../../contracts/auth'
import callApi from '../../helpers/callApi'
import registerSchema from '../../schema/registerSchema'

interface RegisterFormProps {

}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            phone : 0,
            
        }
    },
    validationSchema : registerSchema,
    handleSubmit : async (values) => {
        const res = await callApi().post('/auth/register', values)
        if( res.status === 201) {
            Router.push('/auth/login')
        }
    }
})(InnerRegisterForm)

export default RegisterForm;
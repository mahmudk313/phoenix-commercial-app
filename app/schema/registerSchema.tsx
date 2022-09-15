import * as yup from 'yup';

const registerSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
})

export default registerSchema;
import * as yup from 'yup';

const registerSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string(),
    email: yup.string().email(),
    password: yup.string().min(5),
    phone: yup.number().required()
})

export default registerSchema;
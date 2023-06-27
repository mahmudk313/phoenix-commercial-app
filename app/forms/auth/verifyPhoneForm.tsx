import { withFormik } from "formik";


//Components
import { VerifyPhoneFormValuesInterface } from "../../contracts/auth";
import innerVerifyPhoneForm from "../../components/auth/innerVerifyPhoneForm";

interface verifyPhoneFormProps {
    setCookies : any,
    cookies : any
}

const VerifyPhoneForm = withFormik<verifyPhoneFormProps, VerifyPhoneFormValuesInterface>({
    mapPropsToValues : props => {
        return {
            token : props.cookies["phoenix-token"],
            code : 0
        }
    },
})(innerVerifyPhoneForm)

export default VerifyPhoneForm;
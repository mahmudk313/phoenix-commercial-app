import { withFormik } from "formik";


//Components
import { VerifyPhoneFormValuesInterface } from "../../contracts/auth";
import innerVerifyPhoneForm from "../../components/auth/innerVerifyPhoneForm";

interface verifyPhoneFormProps {
    setCookies : any,
    cookies : any
}

const VerifyPhoneForm = withFormik<verifyPhoneFormProps, VerifyPhoneFormValuesInterface>({
})(innerVerifyPhoneForm)

export default VerifyPhoneForm;